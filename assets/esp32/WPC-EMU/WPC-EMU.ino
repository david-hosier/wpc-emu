// tested using a "ESP32 Dev Module" / "ESP32-DevKitC"
// see https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md
// v1.0.1

#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>

#define FAKE_PINBALL_ENABLED true
#define DEBUG

bool deviceConnected = false;
bool oldDeviceConnected = false;
uint8_t statePowerstate = 1;

#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"

// Characteristics are defined attribute types that contain a single logical value. 
#define CHARACTERISTIC_WPCSTATE_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"
#define CHARACTERISTIC_POWERSTATE_UUID "82ee4ff0-b0e3-4088-85e3-bdaa212e4fa3"
#define CHARACTERISTIC_RESET_UUID "26ac8e88-7b63-4e88-8ca2-045c76345b5f"

#define WPCEMU_PAYLOAD_REBOOT_CONTROLLER 42
#define WPCEMU_PAYLOAD_REBOOT_PINBALLMACHINE 1


#define NOTIFY_MSG_OFFSET_ZEROCROSS 0
#define NOTIFY_MSG_SIZE_ZEROCROSS 4
#define NOTIFY_MSG_OFFSET_INPUT_SWITCH 4
#define NOTIFY_MSG_SIZE_INPUT_SWITCH 8
#define NOTIFY_MSG_OFFSET_COINDOOR 12
#define NOTIFY_MSG_SIZE_COINDOOR 1
#define NOTIFY_MSG_OFFSET_FLIPTRONIC 13
#define NOTIFY_MSG_SIZE_FLIPTRONIC 1

#define MESSAGE_SIZE NOTIFY_MSG_SIZE_ZEROCROSS + NOTIFY_MSG_SIZE_INPUT_SWITCH + NOTIFY_MSG_SIZE_COINDOOR + NOTIFY_MSG_SIZE_FLIPTRONIC

uint8_t statePayload[MESSAGE_SIZE] = {};
volatile uint32_t zeroconfInterruptCounter = 0;
volatile uint32_t fakeTimer = 0;

/*

Firmware sends data to the emulator (serial):
- zerocross counter (32bit)
- input switch matrix state (64bit)
- coin door state (8bit) NOT YET
- fliptronic state (8bit) NOT YET - not sure what to do...
- power state (1bit) NOT YET - remove it because zerocross can be used for that?

*/

void setup() {
  Serial.begin(115200);
  uint64_t chipid=ESP.getEfuseMac();//The chip ID is essentially its MAC address(length: 6 bytes).
  Serial.printf("ESP32 Chip ID = %04X", (uint16_t)(chipid>>32));//print High 2 bytes
  Serial.printf("%08X\n", (uint32_t)chipid);//print Low 4bytes.

  initBluetooth();
  initGpio();
  initTimer();
}

void loop() {
    // notify changed value
    if (deviceConnected) {
        loopGPIO();
        loopBluetooth();
        delay(30); // bluetooth stack will go into congestion, if too many packets are sent
    }
    // disconnecting
    if (!deviceConnected && oldDeviceConnected) {
        Serial.printf("BT Disconnected\n");
        delay(500); // give the bluetooth stack the chance to get things ready
        RestartBluetoothAdvertising();
        oldDeviceConnected = deviceConnected;
    }
    // connecting
    if (deviceConnected && !oldDeviceConnected) {
        Serial.printf("BT Connecting\n");
        // do stuff here on connecting
        oldDeviceConnected = deviceConnected;
    }
}

TCA9548A.selectChannel(0)
Rangefinder.init()

TCA9548A.selectChannel(1)
Rangefinder.init()

basic.forever(function () {

    TCA9548A.selectChannel(0)
    let x = Rangefinder.distance()

    TCA9548A.selectChannel(1)
    let y = Rangefinder.distance()

    led.plotBarGraph(
        x+y,
        1000
    )
    basic.pause(100)
})


/**
 * Controls a TCA9548A i2c multiplexer
 */
//% color=65 weight=80
//% icon="\uf550"
namespace TCA9548A {
    let i2cAddr = 0x70
    /**
    * Select the device to control SD0 to SD7
    **/
    //% block="Select Channel"
    //% blockId=select_channel
    //% channel.min=0 channel.max=7 
    export function selectChannel(channel: number): void {
        pins.i2cWriteNumber(i2cAddr, channel + 1, NumberFormat.UInt8BE)
        control.waitMicros(50)
    }
}


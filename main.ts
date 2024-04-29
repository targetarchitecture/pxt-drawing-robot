
// TCA9548A.selectChannel(0)
// Rangefinder.init()
// TCA9548A.selectChannel(1)
// Rangefinder.init()

// pins.i2cWriteNumber(0x70, 1<<2, NumberFormat.UInt8BE)
// control.waitMicros(50)
// Rangefinder.init()

pins.i2cWriteNumber(0x70, 1 << 7, NumberFormat.UInt8BE)
control.waitMicros(50)
Rangefinder.init()

// TCA9548A.selectChannel(3)
// Rangefinder.init()
// TCA9548A.selectChannel(4)
// Rangefinder.init()
// TCA9548A.selectChannel(5)
// Rangefinder.init()
// TCA9548A.selectChannel(6)
// Rangefinder.init()
// TCA9548A.selectChannel(7)
// Rangefinder.init()

basic.forever(function () {

    let x = 0
    // TCA9548A.selectChannel(0)
    // x =x+ Rangefinder.distance()

    // TCA9548A.selectChannel(1)
    // x = x + Rangefinder.distance()

    pins.i2cWriteNumber(0x70, 1 << 7, NumberFormat.UInt8BE)
    control.waitMicros(50)

    x =  Rangefinder.distance()

    // TCA9548A.selectChannel(3)
    // x = x + Rangefinder.distance()

    // TCA9548A.selectChannel(4)
    // x = x + Rangefinder.distance()

    // TCA9548A.selectChannel(5)
    // x = x + Rangefinder.distance()

    // TCA9548A.selectChannel(6)
    // x = x + Rangefinder.distance()

    // TCA9548A.selectChannel(7)
    // x = x + Rangefinder.distance()

    led.plotBarGraph(
        x,
        500
    )

    basic.pause(100)
})

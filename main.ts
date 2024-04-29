/**
 * Channel 2 = 1<<2
 * 
 * Channel 3 = 1<<3
 * 
 * Channel 4 = 1<<4
 */
let x = 0
pins.i2cWriteNumber(
112,
1 << 2,
NumberFormat.UInt8BE,
false
)
control.waitMicros(50)
pins.i2cWriteNumber(
112,
1 << 3,
NumberFormat.UInt8BE,
false
)
control.waitMicros(50)
pins.i2cWriteNumber(
112,
1 << 4,
NumberFormat.UInt8BE,
false
)
control.waitMicros(50)
Rangefinder.init()
basic.forever(function () {
    serial.writeString("" + ("----\r\n"))
    serial.writeString("" + control.millis() + "\r\n")
    pins.i2cWriteNumber(
    112,
    1 << 2,
    NumberFormat.UInt8BE,
    false
    )
    control.waitMicros(50)
    x = x + Rangefinder.distance()
    serial.writeString("" + control.millis() + "\r\n")
    pins.i2cWriteNumber(
    112,
    1 << 3,
    NumberFormat.UInt8BE,
    false
    )
    control.waitMicros(50)
    x = x + Rangefinder.distance()
    serial.writeString("" + control.millis() + "\r\n")
    pins.i2cWriteNumber(
    112,
    1 << 4,
    NumberFormat.UInt8BE,
    false
    )
    control.waitMicros(50)
    x = x + Rangefinder.distance()
    serial.writeString("" + control.millis() + "\r\n")
    led.plotBarGraph(
    x,
    1500
    )
    serial.writeString("" + control.millis() + "\r\n")
    basic.pause(1000)
})

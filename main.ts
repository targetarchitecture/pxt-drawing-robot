let x = 0
pins.i2cWriteNumber(
112,
0,
NumberFormat.UInt8BE,
false
)
control.waitMicros(50)
pins.i2cWriteNumber(
112,
1 << 2,
NumberFormat.UInt8BE,
false
)
control.waitMicros(50)
Rangefinder.init()
pins.i2cWriteNumber(
112,
1 << 3,
NumberFormat.UInt8BE,
false
)
control.waitMicros(50)
Rangefinder.init()
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
    pins.i2cWriteNumber(
    112,
    0,
    NumberFormat.UInt8BE,
    false
    )
    control.waitMicros(50)
    serial.writeString("start of loop" + control.millis() + "\r\n")
    pins.i2cWriteNumber(
    112,
    1 << 2,
    NumberFormat.UInt8BE,
    false
    )
    control.waitMicros(50)
    x = x + Rangefinder.distance()
    serial.writeString("ToF 2:" + control.millis() + "\r\n")
    pins.i2cWriteNumber(
    112,
    1 << 3,
    NumberFormat.UInt8BE,
    false
    )
    control.waitMicros(50)
    x = x + Rangefinder.distance()
    serial.writeString("ToF 3:" + control.millis() + "\r\n")
    pins.i2cWriteNumber(
    112,
    1 << 4,
    NumberFormat.UInt8BE,
    false
    )
    control.waitMicros(50)
    x = x + Rangefinder.distance()
    serial.writeString("ToF 4:" + control.millis() + "\r\n")
    led.plotBarGraph(
    x,
    1500
    )
    serial.writeString("end of plotBarGraph:" + control.millis() + "\r\n")
    basic.pause(1000)
})

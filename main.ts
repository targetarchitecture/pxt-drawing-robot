let x = 0

TCA9548A.selectChannel(3)
Rangefinder.init()
TCA9548A.selectChannel(4)
Rangefinder.init()

basic.forever(function () {
    x=0
   // serial.writeString("" + ("----\r\n"))
   // serial.writeString("start of loop" + control.millis() + "\r\n")

    TCA9548A.selectChannel(3)
    x = x + Rangefinder.distance()
   // serial.writeString("ToF 3:" + control.millis() + "\r\n")

    TCA9548A.selectChannel(4)
    x = x + Rangefinder.distance()
   // serial.writeString("ToF 4:" + control.millis() + "\r\n")

    led.plotBarGraph(
    x,
    1500
    )
    
  //  serial.writeString("end of plotBarGraph:" + control.millis() + "\r\n")
    basic.pause(100)
})

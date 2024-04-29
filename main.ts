
TCA9548A.selectChannel(0)
Rangefinder.init()
TCA9548A.selectChannel(1)
Rangefinder.init()
TCA9548A.selectChannel(2)
Rangefinder.init()
TCA9548A.selectChannel(3)
Rangefinder.init()
TCA9548A.selectChannel(4)
Rangefinder.init()
TCA9548A.selectChannel(5)
Rangefinder.init()
TCA9548A.selectChannel(6)
Rangefinder.init()
TCA9548A.selectChannel(7)
Rangefinder.init()

basic.forever(function () {

let x=0
    TCA9548A.selectChannel(0)
    x =x+ Rangefinder.distance()

    TCA9548A.selectChannel(1)
    x = x + Rangefinder.distance()

    TCA9548A.selectChannel(2)
    x = x + Rangefinder.distance()

    TCA9548A.selectChannel(3)
    x = x + Rangefinder.distance()

    TCA9548A.selectChannel(4)
    x = x + Rangefinder.distance()

    TCA9548A.selectChannel(5)
    x = x + Rangefinder.distance()

    TCA9548A.selectChannel(6)
    x = x + Rangefinder.distance()

    TCA9548A.selectChannel(7)
    x = x + Rangefinder.distance()

    led.plotBarGraph(
    x,
    1000
    )

    basic.pause(100)
})

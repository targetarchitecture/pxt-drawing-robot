let c5 = 0
let c6 = 0
let c7 = 0
TCA9548A.selectChannel(5)
Rangefinder.init()
TCA9548A.selectChannel(6)
Rangefinder.init()
TCA9548A.selectChannel(7)
Rangefinder.init()

basic.forever(function () {
    TCA9548A.selectChannel(5)
    c5 = Rangefinder.distance()
    TCA9548A.selectChannel(6)
    c6 = Rangefinder.distance()
    TCA9548A.selectChannel(7)
    c7 = Rangefinder.distance()

    led.plotBarGraph(
        c5 + c6 + c7,
        1000
    )
    basic.pause(100)
})

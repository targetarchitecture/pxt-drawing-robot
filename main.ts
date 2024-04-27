
TCA9548A.selectChannel(0)
Rangefinder.init()

// TCA9548A.selectChannel(1)
// Rangefinder.init()

basic.forever(function () {

    // TCA9548A.selectChannel(0)
    // let x = Rangefinder.distance()

    TCA9548A.selectChannel(0)
    led.plotBarGraph(
        Rangefinder.distance(),
        1000
    )
    basic.pause(100)
})


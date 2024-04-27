let y = 0
let x = 0
TCA9548A.selectChannel(0)
Rangefinder.init()
TCA9548A.selectChannel(1)
Rangefinder.init()
basic.forever(function () {
TCA9548A.selectChannel(0)
x = Rangefinder.distance()
    TCA9548A.selectChannel(1)
y = Rangefinder.distance()
    led.plotBarGraph(
    x + y,
    1000
    )
    basic.pause(100)
})

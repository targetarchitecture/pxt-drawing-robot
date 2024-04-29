let c5 = 0

for (let i = 1; i <= 7; i++) {
    TCA9548A.selectChannel(i)
    Rangefinder.init()
}


/**
 * TCA9548A.selectChannel(6)
 * 
 * Rangefinder.init()
 * 
 * TCA9548A.selectChannel(7)
 * 
 * Rangefinder.init()
 */
basic.forever(function () {
    let c7 = 0
    let c6 = 0

 
    for (let i = 1; i <= 7; i++) {
   

    TCA9548A.selectChannel(i)
c5 = Rangefinder.distance()
    // TCA9548A.selectChannel(6)
    // c6 = Rangefinder.distance()
    // TCA9548A.selectChannel(7)
    // c7 = Rangefinder.distance()
    led.plotBarGraph(
    c5 + c6 + c7,
    1000
    )
    }
    basic.pause(100)
})

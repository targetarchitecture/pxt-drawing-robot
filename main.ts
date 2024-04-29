let x = 0

// TCA9548A.selectChannel(3)
// Rangefinder.init()
// TCA9548A.selectChannel(4)
// Rangefinder.init()

// basic.forever(function () {
//     x=0
//     TCA9548A.selectChannel(3)
//     x = x + Rangefinder.distance()

//     TCA9548A.selectChannel(4)
//     x = x + Rangefinder.distance()

//     led.plotBarGraph(
//     x,
//     1500
//     )    
//     basic.pause(100)
// })

serial.redirectToUSB()
irRemote.connectInfrared(DigitalPin.P16)

// basic.forever(function () {
//     x = irRemote.returnIrButton()
//     serial.writeValue("irRemote", x)
//     basic.pause(110)
// })

let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)

let val = 0

basic.forever(function () {

    val = irRemote.returnIrButton()

    if (val != 0) {


        if (val == 70) {
            k_Bit.run(DIR.RunForward,40)
   
        } else if (val = 68) {


        } else if (val == 67) {
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 35)

        } else if (val == 21) {


        } else if (val == 64) {
            k_Bit.carStop();
        }
    }
})
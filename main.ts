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
k_Bit.carStop();

// basic.forever(function () {
//     x = irRemote.returnIrButton()
//     serial.writeValue("irRemote", x)
//     basic.pause(110)
// })

k_Bit.LED_brightness(50)
k_Bit.Led(COLOR.blue)

let val = 0

basic.forever(function () {

    val = irRemote.returnIrButton()

    if (val == 0) {
        k_Bit.carStop();
        k_Bit.Led(COLOR.black)
    }
    else if (val == 70) {
        k_Bit.run(DIR.RunForward, 10)
        k_Bit.Led(COLOR.green)
    } 
    else if (val == 68) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back,10)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 10)
        k_Bit.Led(COLOR.blue)
    } 
    else if (val == 67) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 10)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, 10)
        k_Bit.Led(COLOR.white)
    } 
    else if (val == 21) {
        k_Bit.run(DIR.RunBack, 10)
        k_Bit.Led(COLOR.red)
    }

    basic.pause(110)
})
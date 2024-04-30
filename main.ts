
serial.redirectToUSB()
irRemote.connectInfrared(DigitalPin.P16)
k_Bit.carStop();

k_Bit.LED_brightness(50)
k_Bit.Led(COLOR.blue)

let val = 0

basic.forever(function () {

    val = irRemote.returnIrButton()

    k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 0)
    k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 0)
    k_Bit.Led(COLOR.black)

    if (val == 70) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 10)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 10)
        k_Bit.Led(COLOR.green)
    }
    else if (val == 68) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 10)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 10)
        k_Bit.Led(COLOR.blue)
    }
    else if (val == 67) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 10)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, 10)
        k_Bit.Led(COLOR.white)
    }
    else if (val == 21) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 10)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, 10)
        k_Bit.Led(COLOR.red)
    }

    basic.pause(110)
})
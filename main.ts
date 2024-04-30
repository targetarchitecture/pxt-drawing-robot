
serial.redirectToUSB()
irRemote.connectInfrared(DigitalPin.P16)
k_Bit.carStop();

k_Bit.LED_brightness(50)
k_Bit.Led(COLOR.blue)

let val = 0
let moved = false

basic.forever(function () {

    val = irRemote.returnIrButton()

    if (val == 0 && moved==true ) {
        k_Bit.carStop();
        k_Bit.Led(COLOR.black)
    }
    else if (val == 70) {
        moved == true
        k_Bit.run(DIR.RunForward, 10)
        k_Bit.Led(COLOR.green)
    }
    else if (val == 68) {
        moved == true
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 10)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 10)
        k_Bit.Led(COLOR.blue)
    }
    else if (val == 67) {
        moved == true
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 10)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, 10)
        k_Bit.Led(COLOR.white)
    }
    else if (val == 21) {
        moved == true
        k_Bit.run(DIR.RunBack, 10)
        k_Bit.Led(COLOR.red)
    }

    basic.pause(110)
})
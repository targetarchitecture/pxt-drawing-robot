
serial.redirectToUSB()
irRemote.connectInfrared(DigitalPin.P16)
k_Bit.carStop();

k_Bit.LED_brightness(50)
k_Bit.Led(COLOR.blue)

let val = 0
let speed = 10
basic.showNumber(speed)

input.onButtonPressed(Button.A, function() {
    speed+=10
    speed = Math.min(speed,100)
    basic.showNumber(speed)
})

input.onButtonPressed(Button.B, function () {
    speed -= 10
    speed = Math.max(speed, 10)
    basic.showNumber(speed)
})

basic.forever(function () {

    val = irRemote.returnIrButton()

    k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 0)
    k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 0)
    k_Bit.Led(COLOR.black)

    if (val == 70) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, speed)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, speed)
        k_Bit.Led(COLOR.green)
    }
    else if (val == 68) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, speed)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, speed)
        k_Bit.Led(COLOR.blue)
    }
    else if (val == 67) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, speed)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, speed)
        k_Bit.Led(COLOR.white)
    }
    else if (val == 21) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, speed)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, speed)
        k_Bit.Led(COLOR.red)
    }

    basic.pause(110)
})
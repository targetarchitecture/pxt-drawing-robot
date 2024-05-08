
serial.redirectToUSB()
irRemote.connectInfrared(DigitalPin.P16)
led.enable(true)

k_Bit.Led(COLOR.blue)
k_Bit.LED_brightness(100)

k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 0)
k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 0)

let val = 0
let speed = 20
basic.showNumber(speed)

input.onButtonPressed(Button.A, function () {
    speed += 10
    speed = Math.min(speed, 100)
    basic.showNumber(speed)
})

input.onButtonPressed(Button.B, function () {
    speed -= 10
    speed = Math.max(speed, 10)
    basic.showNumber(speed)
})

let selfDriving = false;

basic.forever(function () {

    val = irRemote.returnIrButton()

    if (val == 70) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, speed)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, speed)
        k_Bit.Led(COLOR.green)
    }
    else if (val == 68) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 20)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 20)
        k_Bit.Led(COLOR.blue)
    }
    else if (val == 67) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 20)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, 20)
        k_Bit.Led(COLOR.white)
    }
    else if (val == 21) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, speed)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, speed)
        k_Bit.Led(COLOR.red)
    }
    else if (val == 66 || val ==74) {
        selfDriving = !selfDriving
    }
    else {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 0)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 0)
        k_Bit.Led(COLOR.black)
    }


    if (selfDriving == true) {

        if (k_Bit.obstacle(MotorObs.LeftSide) == 0 && k_Bit.obstacle(MotorObs.RightSide) == 0) {
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, speed)
            k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, speed)
            k_Bit.Led(COLOR.red)
        }
       else if (k_Bit.obstacle(MotorObs.LeftSide) == 1 && k_Bit.obstacle(MotorObs.RightSide) == 1) {
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, speed)
            k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, speed)
            k_Bit.Led(COLOR.green)
            basic.pause(400)
        }
        else  if (k_Bit.obstacle(MotorObs.LeftSide) == 1 && k_Bit.obstacle(MotorObs.RightSide) == 0) {
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, speed)
            k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, speed)            
            k_Bit.Led(COLOR.white)
            basic.pause(400)
        }
        else  if (k_Bit.obstacle(MotorObs.LeftSide) == 0 && k_Bit.obstacle(MotorObs.RightSide) == 1) {
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, speed)
            k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, speed)
            k_Bit.Led(COLOR.blue)
            basic.pause(400)
        } else {
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 0)
            k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 0)
            k_Bit.Led(COLOR.black)
        }    }


    basic.pause(100)
})
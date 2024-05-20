// basic.showNumber(speed)
// input.onButtonPressed(Button.A, function () {
//     speed += 10
//     speed = Math.min(speed, 100)
//     basic.showNumber(speed)
// })
// input.onButtonPressed(Button.B, function () {
//     speed += 0 - 10
//     speed = Math.max(speed, 10)
//     basic.showNumber(speed)
// })
// let selfDriving = false
// let val = 0
 let speed = 0

motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Red)
motorbit.Setting_the_on_board_lights(Offset.TWO, RgbColors.Green)
motorbit.Setting_the_on_board_lights(Offset.THREE, RgbColors.Blue)
motorbit.Setting_the_on_board_lights(Offset.FOUR, RgbColors.Yellow)


motorbit.MotorRunDual(motorbit.Motors.M1, 150, motorbit.Motors.M2, 150)
motorbit.MotorRunDual(motorbit.Motors.M3, 150, motorbit.Motors.M4, 150)
basic.pause(1000)
motorbit.MotorStopAll();


speed = 20

//dualsense.startDualSense()

// basic.forever(function () {
//     val = irRemote.returnIrButton()
//     if (val == 70) {
//         k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, speed)
//         k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, speed)
//         k_Bit.Led(COLOR.green)
//     } else if (val == 68) {
//         k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 20)
//         k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 20)
//         k_Bit.Led(COLOR.blue)
//     } else if (val == 67) {
//         k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 20)
//         k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, 20)
//         k_Bit.Led(COLOR.white)
//     } else if (val == 21) {
//         k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, speed)
//         k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, speed)
//         k_Bit.Led(COLOR.red)
//     } else if (val == 66 || val == 74) {
//         selfDriving = !(selfDriving)
//     } else {
//         k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 0)
//         k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 0)
//         k_Bit.Led(COLOR.black)
//     }
//     if (selfDriving == true) {
//         if (k_Bit.obstacle(MotorObs.LeftSide) == 0 && k_Bit.obstacle(MotorObs.RightSide) == 0) {
//             k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, speed)
//             k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, speed)
//             k_Bit.Led(COLOR.red)
//         } else if (k_Bit.obstacle(MotorObs.LeftSide) == 1 && k_Bit.obstacle(MotorObs.RightSide) == 1) {
//             k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, speed)
//             k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, speed)
//             k_Bit.Led(COLOR.green)
//             basic.pause(400)
//         } else if (k_Bit.obstacle(MotorObs.LeftSide) == 1 && k_Bit.obstacle(MotorObs.RightSide) == 0) {
//             k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, speed)
//             k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, speed)
//             k_Bit.Led(COLOR.white)
//             basic.pause(400)
//         } else if (k_Bit.obstacle(MotorObs.LeftSide) == 0 && k_Bit.obstacle(MotorObs.RightSide) == 1) {
//             k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, speed)
//             k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, speed)
//             k_Bit.Led(COLOR.blue)
//             basic.pause(400)
//         } else {
//             k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 0)
//             k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 0)
//             k_Bit.Led(COLOR.black)
//         }
//     }
//     basic.pause(100)
// })

// dualsense.onClicked(dualsense.Buttons.A, function () {
//     dualsense.rumble();
// })

// dualsense.onClicked(dualsense.Buttons.X, function () {
//     dualsense.led(randint(1, 4))
// })


// dualsense.onClicked(dualsense.Buttons.B, function () {
//     dualsense.colour(randint(0, 255), randint(0, 255), randint(0, 255))
// })
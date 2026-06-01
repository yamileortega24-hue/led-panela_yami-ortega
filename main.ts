input.onButtonPressed(Button.A, function () {
    led.plotBrightness(0, 0, 255)
    led.setBrightness(255)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(0)
})
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.Silly)
    basic.pause(100)
})

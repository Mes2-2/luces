input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
basic.clearScreen()
basic.forever(function () {
	
})

basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P2) / 1000 * 100)
    basic.pause(100)
})

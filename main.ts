pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P3, 0)
basic.forever(function () {
    makerbit.showStringOnLcd1602("" + (pins.analogReadPin(AnalogPin.P10)), makerbit.position1602(LcdPosition1602.Pos1), 32)
    if (pins.analogReadPin(AnalogPin.P10) < 24) {
        pins.digitalWritePin(DigitalPin.P3, 1)
    } else if (24 < pins.analogReadPin(AnalogPin.P10)) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})

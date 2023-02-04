OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.newLine()
    OLED.writeStringNewLine("" + sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P1) + " mm")
    basic.pause(500)
})

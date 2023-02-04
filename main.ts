function showDistanceAndClue () {
    distance = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P1)
    OLED.clear()
    OLED.newLine()
    if (distance > 110 && distance < 130) {
        OLED.writeStringNewLine("Clue #5")
    }
    if (distance > 90 && distance < 109) {
        OLED.writeStringNewLine("Clue #4")
    }
    if (distance > 60 && distance < 89) {
        OLED.writeStringNewLine("Clue #3")
    }
    if (distance > 40 && distance < 59) {
        OLED.writeStringNewLine("Clue #2")
    }
    if (distance > 25 && distance < 39) {
        OLED.writeStringNewLine("Clue #1")
    }
    OLED.newLine()
    OLED.writeStringNewLine("" + distance + " mm")
}
let distance = 0
OLED.init(128, 64)
distance = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    showDistanceAndClue()
    basic.pause(2000)
})

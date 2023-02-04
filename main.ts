function singSong () {
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(233, music.beat(BeatFraction.Half))
        basic.pause(1000)
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(233, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(1000)
    }
}
input.onButtonPressed(Button.A, function () {
    reveal()
    singSong()
})
function reveal () {
    servos.P2.run(-100)
    basic.pause(1500)
    servos.P2.stop()
}
function hide () {
    servos.P2.run(100)
    basic.pause(1500)
    servos.P2.stop()
}
input.onButtonPressed(Button.B, function () {
    hide()
})
function showDistanceAndClue () {
    distance = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P16)
    OLED.clear()
    OLED.newLine()
    if (distance > 160 && distance < 200) {
        OLED.writeStringNewLine("I am from the 1980s")
        OLED.newLine()
        OLED.writeStringNewLine("Press \"A\" to reveal!")
    }
    if (distance > 140 && distance < 159) {
        OLED.writeStringNewLine("I am a famous movie ")
        OLED.writeStringNewLine("with many sequels")
        OLED.newLine()
        OLED.writeStringNewLine("Press \"A\" to reveal!")
    }
    if (distance > 100 && distance < 139) {
        OLED.writeStringNewLine("I featured an ")
        OLED.writeStringNewLine("unusual business")
        OLED.newLine()
        OLED.writeStringNewLine("Press \"A\" to reveal!")
    }
    if (distance > 70 && distance < 99) {
        OLED.writeStringNewLine("Famous line:")
        OLED.writeStringNewLine("\"HE SLIMED ME!\"")
        OLED.newLine()
        OLED.writeStringNewLine("Press \"A\" to reveal!")
    }
    if (distance > 40 && distance < 69) {
        OLED.writeStringNewLine("WHO YOU GONNA CALL?")
        OLED.newLine()
        OLED.writeStringNewLine("Press \"A\" to reveal!")
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

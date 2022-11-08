for (let index = 0; index <= 2; index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(index - 0)
}
music.playTone(262, music.beat(BeatFraction.Whole))
basic.showString("GO！")

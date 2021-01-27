while (true) {
    console.log("light level:" + ("" + input.lightLevel()))
    if (input.lightLevel() > 11) {
        music.powerDown.playUntilDone()
    } else {
        music.stopAllSounds()
    }
    
}

while True:
    print("light level:" + str(input.light_level()))
    if input.light_level() >11:
            music.power_down.play_until_done()
    else:
            music.stop_all_sounds()

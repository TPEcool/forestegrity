def on_up_pressed():
    animation.run_image_animation(plr, assets.animation("""
        walkB
    """), 200, True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_down_released():
    resetAnim()
controller.down.on_event(ControllerButtonEvent.RELEASED, on_down_released)

def on_left_pressed():
    animation.run_image_animation(plr, assets.animation("""
        walkC
    """), 200, True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_released():
    resetAnim()
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    resetAnim()
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_right_pressed():
    animation.run_image_animation(plr, assets.animation("""
        walkD
    """), 200, True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_up_released():
    resetAnim()
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def resetAnim():
    if not (controller.left.is_pressed() or controller.up.is_pressed() or (controller.down.is_pressed() or controller.right.is_pressed())):
        animation.stop_animation(animation.AnimationTypes.ALL, plr)
        plr.set_image(assets.image("""
            char
        """))

def on_down_pressed():
    animation.run_image_animation(plr, assets.animation("""
        walkA
    """), 200, True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_a_repeated():
    print("amogus")
controller.A.on_event(ControllerButtonEvent.REPEATED, on_a_repeated)

plr: Sprite = None
plr = sprites.create(assets.image("""
    char
"""), SpriteKind.player)
tiles.set_current_tilemap(tilemap("""
    forest
"""))
scene.camera_follow_sprite(plr)
controller.move_sprite(plr)
function AnimationEngine () {
    if (controller.left.isPressed() && controller.right.isPressed() || controller.up.isPressed() && controller.down.isPressed()) {
        animation.stopAnimation(animation.AnimationTypes.All, plr)
        plr.setImage(assets.image`char`)
    } else {
        if (controller.left.isPressed()) {
            animation.runImageAnimation(
            plr,
            assets.animation`walkC`,
            200,
            true
            )
        } else if (controller.up.isPressed()) {
            animation.runImageAnimation(
            plr,
            assets.animation`walkB`,
            200,
            true
            )
        } else if (controller.right.isPressed()) {
            animation.runImageAnimation(
            plr,
            assets.animation`walkD`,
            200,
            true
            )
        } else if (controller.down.isPressed()) {
            animation.runImageAnimation(
            plr,
            assets.animation`walkA`,
            200,
            true
            )
        }
    }
}
function ResetAnimations () {
    if (!(controller.left.isPressed() || controller.up.isPressed() || (controller.down.isPressed() || controller.right.isPressed()))) {
        animation.stopAnimation(animation.AnimationTypes.All, plr)
        plr.setImage(assets.image`char`)
    }
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    AnimationEngine()
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    ResetAnimations()
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    ResetAnimations()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    ResetAnimations()
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    ResetAnimations()
})
let plr: Sprite = null
plr = sprites.create(assets.image`char`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`forest`)
scene.cameraFollowSprite(plr)
controller.moveSprite(plr)

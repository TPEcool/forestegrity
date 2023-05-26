function AnimationEngine () {
    if (controller.left.isPressed() && controller.right.isPressed() || controller.up.isPressed() && controller.down.isPressed()) {
        animation.stopAnimation(animation.AnimationTypes.All, plr)
        plr.setImage(assets.image`char`)
    } else {
        if (controller.left.isPressed()) {
            animation.runImageAnimation(
            plr,
            assets.animation`walkC`,
            500,
            true
            )
        } else if (controller.up.isPressed()) {
            animation.runImageAnimation(
            plr,
            assets.animation`walkB`,
            500,
            true
            )
        } else if (controller.right.isPressed()) {
            animation.runImageAnimation(
            plr,
            assets.animation`walkD`,
            500,
            true
            )
        } else if (controller.down.isPressed()) {
            animation.runImageAnimation(
            plr,
            assets.animation`walkA`,
            1000,
            true
            )
        }
    }
}
function ResetAnimations () {
    if (!(controller.left.isPressed() || controller.up.isPressed() || (controller.down.isPressed() || controller.right.isPressed()))) {
        animation.stopAnimation(animation.AnimationTypes.All, plr)
        plr.setImage(assets.image`char`)
    } else {
        AnimationEngine()
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

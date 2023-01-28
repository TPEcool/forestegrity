controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    plr,
    assets.animation`walkB`,
    200,
    true
    )
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, plr)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    plr,
    assets.animation`walkC`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    plr,
    assets.animation`walkD`,
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    plr,
    assets.animation`walkA`,
    200,
    true
    )
})
let plr: Sprite = null
plr = sprites.create(assets.image`char`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`forest`)
scene.cameraFollowSprite(plr)
controller.moveSprite(plr)

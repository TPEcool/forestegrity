function AnimationEngine (start: boolean) {
    if (start) {
        if (controller.left.isPressed()) {
        	
        } else if (controller.up.isPressed()) {
        	
        } else if (controller.right.isPressed()) {
        	
        } else if (controller.down.isPressed()) {
        	
        } else {
        	
        }
    } else {
    	
    }
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    resetAnim()
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    resetAnim()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    resetAnim()
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    resetAnim()
})
function resetAnim () {
    if (!(controller.left.isPressed() || controller.up.isPressed() || (controller.down.isPressed() || controller.right.isPressed()))) {
        animation.stopAnimation(animation.AnimationTypes.All, plr)
        plr.setImage(assets.image`char`)
    }
}
let plr: Sprite = null
plr = sprites.create(assets.image`char`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`forest`)
scene.cameraFollowSprite(plr)
controller.moveSprite(plr)

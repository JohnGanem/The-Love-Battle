function createPlayer(game, sprite_name, position) {
    let start_position_y = position;
    let start_position_x = game.world.height - 150;
    let player = game.add.sprite(start_position_y, start_position_x, sprite_name);
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    player.health = 10;
    player.maxHealth = 10;
    return player;
}

function movePlayer(player, control, facing, i) {
    player.body.velocity.x = 0;
    if (control.isDown(ACTIONS.LEFT)) {
        //  Move to the left
        player.body.velocity.x = -150;
        player.animations.play('left');
        facing = "left";
    } else if (control.isDown(ACTIONS.RIGHT)) {
        //  Move to the right
        player.body.velocity.x = 150;
        player.animations.play('right');
        facing = "right";
    } else {
        //  Stand still
        player.animations.stop();
        if (weapons[i].bulletKey === "flower") {
            player.frame = 11;
        } else if (weapons[i].bulletKey === "kiss") {
            player.frame = 10;
        } else if (player.body.touching.down) {
            player.frame = 4;
        } else {
            player.frame = 9;
        }
    }

//  Allow the player to jump if they are touching the ground.
    if ((control.isDown(ACTIONS.UP)) && player.body.touching.down) {
        player.frame = 9;
        player.body.velocity.y = -350;
    }

    return facing;
}
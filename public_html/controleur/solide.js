function createBorders(game, platforms) {
    for (let i = 0; i < game.world.width; i += 8) {
        let horizontal = platforms.create(i, game.world.height - 16, 'blockStandard');
        horizontal.scale.setTo(1, 2);
        horizontal.body.immovable = true;
        horizontal = platforms.create(i, 0, 'blockStandard');
        horizontal.scale.setTo(1, 2);
        horizontal.body.immovable = true;
    }
    for (let i = 0; i < game.world.height; i += 8) {
        let vertical = platforms.create(game.world.width - 16, i, 'blockStandard');
        vertical.scale.setTo(2, 1);
        vertical.body.immovable = true;
        vertical = platforms.create(0, i, 'blockStandard');
        vertical.scale.setTo(2, 1);
        vertical.body.immovable = true;
    }
}
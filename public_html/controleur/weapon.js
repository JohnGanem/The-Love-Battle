function twittos(game, i) {
    let bullet = game.add.weapon(30, 'twittos');
    bullet.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bullet.bulletSpeed = 400;
    bullet.fireRate = 350;
    bullet.trackSprite(players[i], 25, 25, false);
    return bullet;
}

function flower(game, i) {
    var x;
    let bullet = game.add.weapon(30, 'flower');
    bullet.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bullet.health = 3;
    bullet.maxHealth = 3;
    bullet.bulletSpeed = 1000;
    bullet.fireRate = 200;
    bullet.trackSprite(players[i], 25, 25, false);
    if (i === 0) {
        x = 65;
    } else {
        x = game.world.width - 105;
    }
    weaponAmmoMeters[i] = this.game.add.plugin(Phaser.Plugin.HealthMeter);
    weaponAmmoMeters[i].icons(
            bullet,
            {x: x, y: 150, width: 18, height: 54, rows: 1, icon: 'ammo'}
    );
    return bullet;
}

function kiss(game, i) {
    var x;
    let bullet = game.add.weapon(30, 'kiss');
    bullet.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bullet.health = 1;
    bullet.maxHealth = 1;
    bullet.bulletSpeed = 300;
    bullet.fireRate = 1000;
    bullet.trackSprite(players[i], 17, 25, false);
    if (i === 0) {
        x = 80;
    } else {
        x = game.world.width - 90;
    }
    weaponAmmoMeters[i] = this.game.add.plugin(Phaser.Plugin.HealthMeter);
    weaponAmmoMeters[i].icons(
            bullet,
            {x: x, y: 150, width: 18, height: 54, rows: 1, icon: 'ammo'}
    );
    return bullet;
}

function setDirection(weapon, facing) {
    if (facing === "left") {
        weapon.fireAngle = Phaser.ANGLE_LEFT;
    } else if (facing === "right") {
        weapon.fireAngle = Phaser.ANGLE_RIGHT;
    }
}

function getHit(player, bullet) {
    var hit;
    if (bullet.key === "twittos") {
        players[this.nb_player].health -= 1;
        hit = game.add.sprite(players[this.nb_player].x, players[this.nb_player].y, 'twittos_explosion');
    } else if (bullet.key === "flower") {
        players[this.nb_player].health -= 3;
        hit = game.add.sprite(players[this.nb_player].x, players[this.nb_player].y, 'flower_explosion');
    } else if (bullet.key === "kiss") {
        players[this.nb_player].health -= 6;
        hit = game.add.sprite(players[this.nb_player].x, players[this.nb_player].y, 'kiss_explosion');
    }
    game.add.tween(hit).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true);
    bullet.kill();
}
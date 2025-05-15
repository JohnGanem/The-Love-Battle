function bindKeys(game, ACTIONS, nb_player) {
    // Define your keymap, as many keys per action as we want
    var defaultKeymap;
    if (nb_player === 0) {
        defaultKeymap = {
            [ACTIONS.LEFT]: Phaser.KeyCode.Q,
            [ACTIONS.UP]: Phaser.KeyCode.Z,
            [ACTIONS.RIGHT]: Phaser.KeyCode.D,
            [ACTIONS.ATTACK]: Phaser.KeyCode.S
        };
    } else if (nb_player === 1) {
        defaultKeymap = {
            [ACTIONS.LEFT]: Phaser.KeyCode.LEFT,
            [ACTIONS.UP]: Phaser.KeyCode.UP,
            [ACTIONS.RIGHT]: Phaser.KeyCode.RIGHT,
            [ACTIONS.ATTACK]: Phaser.Keyboard.DOWN
        };
    }

    // Create Keymap class
    var Keymap = function (keyboard, defaultKeymap) {
        this.map = {};
        var self = this;
        _.forEach(defaultKeymap, function (KeyCode, action) {
            self.map[action] = [];
            if (_.isArray(KeyCode)) {
                _.forEach(KeyCode, (code) => {
                    self.map[action].push(keyboard.addKey(code));
                });
            } else {
                self.map[action].push(keyboard.addKey(KeyCode));
            }
        });
    };
    // isDown function for your action
    Keymap.prototype.isDown = function (action) {
        for (let i = 0, length = this.map[action].length; i < length; i++) {
            if (this.map[action][i].isDown) {
                return true;
            }
        }
        return false;
    };
    // Create the Keymap
    return (new Keymap(game.input.keyboard, defaultKeymap));
}
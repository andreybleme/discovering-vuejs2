new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false
	},
	methods: {
		startNewGame: function () {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},
		attack: function() {
			this.monsterHealth -= this.calculateDamage(3, 10);

			if (this.checkWin()) {
				return;
			}

			this.mosnterAttacks();
		},
		specialAttack: function () {
			this.monsterHealth -= this.calculateDamage(10, 20);

			if (this.checkWin()) {
				return;
			}

			this.mosnterAttacks();
		},
		heal: function () {
			// body...
		},
		giveUp: function () {
			// body...
		},
		mosnterAttacks: function () {
			this.playerHealth -= this.calculateDamage(5, 12);
			this.checkWin();
		},
		calculateDamage: function (max, min) {
			return Math.max(Math.floor(Math.random() * max), +1, min);
		},
		checkWin: function () {
			if (this.monsterHealth <= 0) {
				if (confirm('You Won! New game?')) {
					this.startNewGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if(this.playerHealth <= 0) {
				if (confirm('You lost! New game?')) {
					this.startNewGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		}
	}
});
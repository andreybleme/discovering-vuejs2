new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	methods: {
		startNewGame: function () {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		attack: function() {
			var damage = this.calculateDamage(3, 10)
			this.monsterHealth -= damage;

			if (this.checkWin()) {
				return;
			}
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits Monster for ' + damage
			});
			this.mosnterAttacks();
		},
		specialAttack: function () {
			var damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;

			if (this.checkWin()) {
				return;
			}
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits HARD Monster for ' + damage
			});
			this.mosnterAttacks();
		},
		heal: function () {
			if (this.playerHealth <= 90) {
				this.playerHealth += 13;
			} else {
				this.playerHealth = 100;
			}
			this.turns.unshift({
				isPlayer: true,
				text: 'Player heals for 13'
			});
			this.mosnterAttacks();
		},
		giveUp: function () {
			this.gameIsRunning = false;
		},
		mosnterAttacks: function () {
			var damage = this.calculateDamage(5, 12);
			this.playerHealth -= damage;
			this.checkWin();
			this.turns.unshift({
				isPlayer: false,
				text: 'Monster hits Player for ' + damage
			});
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
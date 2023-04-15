class Tetris
{
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	initialize() {
		const canvas_game = document.getElementById('game_canvas');
		var cases = [];

		for (let x = 0; x < this.x; x++) {
			cases[x] = [];

			for (let y = 0; y < this.y; y++) {
				cases[x][y] = document.createElement('div');
				cases[x][y].classList.add('case');


				canvas_game.appendChild(cases[x][y]);
			}
		}

	}

	generateTetros() {
		switch(this.random(1, 7)) {
			case 1:
				
				break;

			case 2:

				break;

			case 3:

				break;

			case 4:

				break;

			case 5:

				break;

			case 6:

				break;

			case 7:

				break;
		}
	}

	random(min, max) {
		return Math.floor(Math.random() * (max - min +1)) + min;
	}
}
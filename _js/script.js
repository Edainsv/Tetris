const grid_game = new Tetris(10, 20);
grid_game.initialize();

const game_params = {
	'is_running': true,
	'speed': 1000, // The speed of the game (default 1000)
	'score': 0,
	'saved_tetros': 0 // (1 to 7 (id))
}


if (game_params.is_running) {
	setInterval(() => {
		

	}, game_params.speed);
}
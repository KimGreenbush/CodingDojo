$(document).ready(function () {
	var world = [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1],
		[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
		[1, 2, 3, 2, 1, 2, 3, 2, 2, 2, 3, 2, 1],
		[1, 2, 1, 2, 3, 2, 1, 2, 1, 1, 1, 2, 1],
		[1, 3, 1, 3, 1, 3, 1, 3, 2, 3, 1, 3, 1],
		[1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1],
		[1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1],
		[1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1],
		[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
		[1, 2, 1, 3, 1, 2, 1, 3, 2, 2, 1, 3, 1],
		[1, 3, 1, 2, 2, 3, 2, 2, 1, 3, 2, 2, 1],
		[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
		[1, 2, 2, 3, 1, 2, 2, 3, 1, 2, 2, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	];
	var worldDict = {
		0: "blank",
		1: "wall",
		2: "onigiri",
		3: "sushi",
	};

	function drawWorld() {
		output = "";

		for (var row = 0; row < world.length; row++) {
			output += "<div class = 'row'>";
			for (var x = 0; x < world[row].length; x++) {
				output += "<div class = '" + worldDict[world[row][x]] + "'></div>";
			}
			output += "</div>";
		}
		document.getElementById("world").innerHTML = output;
	}

	drawWorld();

	var ninjaMan = {
		x: 1,
		y: 1,
	};

	var score = 0;
	function updateScore() {
		document.getElementById("score").innerHTML = score;
	}

	function moveNinjaMan() {
		document.getElementById("ninjaman").style.left = ninjaMan.x * 40 + "px";
		document.getElementById("ninjaman").style.top = ninjaMan.y * 40 + "px";
		document.getElementById("ninjaman").style.backgroundImage = "url('ninja_" + direction + ".gif')";
	}

	// I'm still working on random movement and how I want it to look... :D


	document.onkeydown = function (e) {
		console.log(e);
		if (e.keyCode == 37) {
			// LEFT
			if (world[ninjaMan.y][ninjaMan.x - 1] != 1) {
				ninjaMan.x--;
				direction = "left";
			}
		} else if (e.keyCode == 39) {
			// RIGHT
			if (world[ninjaMan.y][ninjaMan.x + 1] != 1) {
				ninjaMan.x++;
				direction = "right";
			}
		} else if (e.keyCode == 40) {
			// DOWN
			if (world[ninjaMan.y + 1][ninjaMan.x] != 1) {
				ninjaMan.y++;
				direction = "down";
			}
		} else if (e.keyCode == 38) {
			// UP/TOP
			if (world[ninjaMan.y - 1][ninjaMan.x] != 1) {
				ninjaMan.y--;
				direction = "up";
			}
		}
		if (world[ninjaMan.y][ninjaMan.x] == 2) {
			score += 5;
		} else if (world[ninjaMan.y][ninjaMan.x] == 3) {
			score += 10;
		}
		moveNinjaMan();
		world[ninjaMan.y][ninjaMan.x] = 0;
		drawWorld();
		updateScore();
	};

	function gameLoop() {
		// drawWorld();

		// moveNinjaMan();
		// updateScore();

		//      moveGhosts(4);

		setTimeout(gameLoop, 1000);
	}
	// gameLoop();
});

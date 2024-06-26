"use strict";

// Get the canvas node and the drawing context
const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");

// set the width and height of the canvas
const w = (canvas.width = document.body.offsetWidth);
const h = (canvas.height = document.body.offsetHeight);

// draw a black rectangle of width and height same as that of the canvas
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, w, h);

const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

var lines = [];

function matrix() {
	// Draw a semitransparent black rectangle on top of previous drawing
	ctx.fillStyle = "#0001";
	// ctx.clearRect(0, 0, w, h);
	ctx.fillRect(0, 0, w, h);

	// Set color to green and font to 15pt monospace in the drawing context
	ctx.fillStyle = "#0a0";
	ctx.font = "15pt monospace";

	// for each column put a random character at the end
	ypos.forEach((y, ind) => {
		// generate a random character

		// x coordinate of the column, y coordinate is already given
		const x = ind * 20;

		const line = lines[ind % lines.length];
		const text = line[(y / 20) % line.length];

		// render the character at (x, y)
		ctx.clearRect(x, y, 20, 20);
		ctx.fillStyle = "#000";
		ctx.fillRect(x, y, 20, 20);
		ctx.fillStyle = "#0a0";
		ctx.fillText(text, x, y);

		// randomly reset the end of the column if it's at least 100px high
		if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
		// otherwise just move the y coordinate for the column 20px down,
		else ypos[ind] = y + 20;
	});
}

fetch("js/background-matrix.txt")
	.then((res) => res.text())
	.then((data) => {
		lines = data.split("\n");

		// render the animation at 20 FPS.
		setInterval(matrix, 50);
	});

function typeWriter(el) {
	const text = el.innerHTML.split("");
	el.innerHTML = "";
	text.forEach((letter, i) => {
		setTimeout(() => {
			el.innerHTML += letter;
		}, 95 * i);
	});
	setInterval(() => {
		typeWriter(el);
	}, 10000);
}

typeWriter(document.querySelector(".container h1 span.typewriter"));

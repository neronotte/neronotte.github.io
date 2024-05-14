"use strict";

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

typeWriter(document.querySelector(".container h1 span"));

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector("button.change-color");
const body = document.querySelector("body");
const span = document.querySelector("span.color");

function onBodyChangeColor(event) {
	const color = getRandomHexColor();
	body.style.backgroundColor = color;
	span.textContent = color;
}

btnChangeColor.addEventListener("click", onBodyChangeColor);

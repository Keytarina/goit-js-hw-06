function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("div#boxes");

let inputValue = 0;

function getInput(event) {
	inputValue = event.target.value;
}

function createBoxes(amount) {
	const arrayOfDivs = [];
	for (let i = 0, size = 30; i < amount; i++, size += 10) {
		const div = document.createElement("div");
		div.style.height = `${size}px`;
		div.style.weight = `${size}px`;
		div.style.backgroundColor = getRandomHexColor();
		arrayOfDivs.push(div);
	}
	boxes.append(...arrayOfDivs);
}

function destroyBoxes() {
	const divs = document.querySelectorAll("div#boxes div");
	divs.forEach((element) => {
		element.remove();
	});
}

input.addEventListener("input", getInput);
btnCreate.addEventListener("click", () => {
	createBoxes(inputValue);
});
btnDestroy.addEventListener("click", destroyBoxes);

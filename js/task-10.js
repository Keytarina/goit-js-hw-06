function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("div#boxes");
const controls = document.querySelector("div#controls");

let inputValue = 0;

function getInput(event) {
	inputValue = event.target.value;
}

function createBoxes(amount) {
	// boxes.style
	const arrayOfDivs = [];
	let size = 30;
	for (let i = 0; i < amount; i++) {
		const div = `<div style="height:${size + 10 * i}px;width:${
			size + 10 * i
		}px;background-color: ${getRandomHexColor()}"></div>`;
		arrayOfDivs.push(div);
	}
	const markup = arrayOfDivs.join("");
	boxes.innerHTML = markup;
}

function destroyBoxes() {
	boxes.innerHTML = " ";
	input.value = "";
	inputValue = 0;
}

input.addEventListener("input", getInput);
btnCreate.addEventListener("click", () => {
	createBoxes(inputValue);
});
btnDestroy.addEventListener("click", destroyBoxes);

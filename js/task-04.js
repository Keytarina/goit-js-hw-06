let counterValue = 0;

const counter = document.querySelector("span#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

decrement.addEventListener("click", (event) => {
	event.preventDefault();
	counterValue -= 1;
	counter.textContent = counterValue;
});

increment.addEventListener("click", () => {
	counterValue += 1;
	counter.textContent = counterValue;
});

const textInput = document.querySelector("#name-input");
const output = document.querySelector("span#name-output");

function onTextOutputChange(event) {
	if (event.target.value.trim()) {
		output.textContent = event.target.value.trim();
	} else {
		output.textContent = "Anonymous";
	}
}

textInput.addEventListener("input", onTextOutputChange);

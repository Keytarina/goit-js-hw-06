const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");

function onInputCheck(event) {
	if (event.currentTarget.value.length === Number(inputLength)) {
		event.currentTarget.classList.add("valid");
		event.currentTarget.classList.remove("invalid");
	} else {
		event.currentTarget.classList.add("invalid");
		event.currentTarget.classList.remove("valid");
	}
}

input.addEventListener("blur", onInputCheck);

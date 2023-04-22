const input = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");
text.style.fontSize = input.value + "px";

function onTextFontSizeChange(event) {
	text.style.fontSize = `${event.target.value}px`;
}

input.addEventListener("input", onTextFontSizeChange);

const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ingredientsList = document.querySelector("ul#ingredients");
let arrayIngredients = [];

ingredients.forEach((ingredient) => {
	const item = document.createElement("li");
	item.classList.add("item");
	item.textContent = ingredient;
	arrayIngredients.push(item);
});
ingredientsList.append(...arrayIngredients);

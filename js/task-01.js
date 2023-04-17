const countItems = document.querySelectorAll("li.item");
// console.log(`Number of categories: ${countItems.length}`);

const categoriesList = document.querySelectorAll("#categories li.item");
console.log("categoriesList: ", categoriesList);

categoriesList.forEach((item) => {
	const categoriesList = item.querySelector("h2");
	console.log(`Category: ${categoriesList.textContent}`);

	const nestedCategoriesList = item.querySelectorAll("ul > li").length;
	console.log(`Elements: ${nestedCategoriesList}`);
});

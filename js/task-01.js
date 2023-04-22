const countItems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${countItems.length}`);

const categoriesList = document.querySelectorAll("#categories li.item");

categoriesList.forEach((item) => {
	const categoriesList = item.firstElementChild;
	console.log(`Category: ${categoriesList.textContent}`);

	const nestedCategoriesList = item.lastElementChild;
	console.log(`Elements: ${nestedCategoriesList.children.length}`);
});
const categoryStorage = require('../categories/categoryStorage');

let items = [];

module.exports.saveItem = function (itemData) {
	const item = {
		id: getNewId(),
		name: itemData.name,
		description: itemData.description,
		categoryId: itemData.categoryId,
		price: parseFloat(itemData.price).toFixed(2),
	};

	items.push(item);
};

const getNewId = () => {
	const lenght = items.length;

	if (lenght == 0) {
		return 1;
	}

	maxId = Math.max(...items.map((item) => item.id));

	return ++maxId;
};

module.exports.getAll = function () {
	return items.map((item) => mapToDto(item));
};

const mapToDto = (item) => {
	return {
		id: item.id,
		name: item.name,
		description: item.description,
		category: categoryStorage.get(item.categoryId),
		price: item.price,
	};
};

module.exports.delete = function (id) {
	let itemIndex = items.findIndex((item) => item.id == id);

	items.splice(itemIndex, 1);
};
module.exports.editByItemId = function (id, itemToEdit) {
	let itemIndex = items.findIndex((item) => item.id == id);
	let editedItem = items[itemIndex];

	editedItem = {
		...editedItem,
		name: itemToEdit.name,
		description: itemToEdit.description,
		categoryId: itemToEdit.categoryId,
		price: itemToEdit.price,
	};

	items[itemIndex] = editedItem;
};

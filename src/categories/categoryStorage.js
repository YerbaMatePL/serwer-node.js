let categories = [
	{
		id: 1,
		name: 'Akcesoria',
	},
	{
		id: 2,
		name: 'Myszki',
	},
	{
		id: 3,
		name: 'Klawiatury',
	},
	{
		id: 4,
		name: 'Monitory',
	},
	{
		id: 5,
		name: 'Kable',
	},
	{
		id: 6,
		name: 'Meble',
	},
];

module.exports.get = function (id) {
	const filteredCatagories = categories.filter((category) => category.id == id);

	return filteredCatagories[0];
};

module.exports.getByName = function (name) {
	return categories.filter((el) => el.name == name);
};

module.exports.getAll = function () {
	return categories;
};

module.exports.editById = function (id, categoryToEdit) {
	let index = categories.findIndex((category) => category.id == id);
	categories[index].name = categoryToEdit.name;
};

module.exports.create = function (newCategory) {
	const object = {
		id: getNewId(),
		name: newCategory.name,
	};
	categories.push(object);
};

const getNewId = () => {
	const lenght = categories.length;

	if (lenght == 0) {
		return 1;
	}

	maxId = Math.max(...categories.map((el) => el.id));

	return ++maxId;
};

module.exports.delete = function (id) {
	let index = categories.findIndex((category) => category.id == id);

	categories.splice(index, 1);
};

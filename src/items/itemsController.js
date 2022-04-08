const itemsStorage = require('./itemsStorage');

module.exports = function (server) {
	server.post('/items', (request, response) => {
		response.send(itemsStorage.saveItem(request.body));
	});

	server.get('/items', (_, response) => {
		response.send(itemsStorage.getAll());
	});

	server.delete('/items/:id', (request, response) => {
		response.send(itemsStorage.delete(request.params.id));
	});

	server.put('/items/:id', (request, response) => {
		response.send(itemsStorage.editByItemId(request.params.id, request.body));
	});
};

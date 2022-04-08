const categoryStorage = require('./categoryStorage');

module.exports = function (server) {
	server.get('/categories/:id', (request, response) => {
		response.send(categoryStorage.get(request.params.id));
	});

	server.get('/categories', (request, response) => {
		response.send(categoryStorage.getAll());
	});

	server.post('/categories', (request, response) => {
		response.send(categoryStorage.create(request.body));
	});

	server.delete('/categories/:id', (request, response) => {
		response.send(categoryStorage.delete(request.params.id));
	});

	server.put('/categories/:id', (request, response) => {
		response.send(categoryStorage.editById(request.params.id, request.body));
	});
};

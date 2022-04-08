const express = require('express'); 
const bodyParser = require('body-parser'); 
const categoryRoutes = require('./src/categories/categoryController');
const itemsRoutes = require('./src/items/itemsController');
const cors = require('cors');
const port = 3005; 

const server = express(); 

server.use(bodyParser.json());

server.use(cors()); 

categoryRoutes(server);

itemsRoutes(server);

server.listen(port); 
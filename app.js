const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const productRoutes = require('./routes/productRoute');
const specs = require('./swagger');
//const mysqlConnection = require('./configuration/db');
//const productQueries = require('./configuration/scripts');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/',productRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

//mysqlConnection.query(productQueries.productTable);

app.listen(8888);
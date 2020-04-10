const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    // List of files to be processed.
    apis: ['./routes/productRoute.js'],
    // You can also set globs for your apis
    // e.g. './routes/*.js'
    basePath: '/',
    swaggerDefinition: {
        info: {
            description: 'CRUD apis for Product',
            swagger: '2.0',
            title: 'Product API',
            version: '1.0.0',
        },
    },
};
const specs = swaggerJsdoc(options);
module.exports = specs;
const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

/**
 * @swagger
 * /products:
 *    get:
 *      tags:
 *          - Product
 *      summary: This should return all products.
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Receive back name and product Id of all Products.
 */
router.route('/products').get(productController.getProducts);

/**
 * @swagger
 * /products:
 *    post:
 *      tags:
 *          - Product
 *      summary: This should create a new product.
 *      description: Creation of product which contains multiple information such as product name etc.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *          required: true
 *      responses:
 *        201:
 *          description: Receive back success message with product and product Id.
 */
router.route('/products').post(productController.createProduct);

/**
 * @swagger
 * /products/{productId}:
 *    put:
 *      tags:
 *          - Product
 *      summary: This should edit an existing product.
 *      description: Update of product which contains multiple information such as product name etc.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *          required: true
 *        - name: productId
 *          in: path
 *          schema:
 *            type: BigInt
 *          required: true
 *      responses:
 *        200:
 *          description: Receive back success message with product and product Id.
 */
router.route('/products/:productId').put(productController.updateProduct);

/**
 * @swagger
 * /products/{productId}:
 *    delete:
 *      tags:
 *          - Product
 *      summary: This should delete an existing product.
 *      description: Deletion of product which contains multiple information such as product name etc.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: productId
 *          in: path
 *          schema:
 *            type: BigInt
 *          required: true
 *      responses:
 *        200:
 *          description: Receive back success message.
 */
router.route('/products/:productId').delete(productController.deleteProduct);
module.exports = router;
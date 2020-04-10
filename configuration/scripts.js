const productTable = 'CREATE TABLE product(id INT NOT NULL IDENTITY PRIMARY KEY ,name char(50) NOT NULL)';

const getAllProducts = 'SELECT * FROM product';

const createProduct = 'INSERT INTO product(name) VALUES (@nameInsert)';

const deleteProduct = 'DELETE FROM product WHERE id = (@idDelete)';

const updateProduct = 'UPDATE product SET name=@nameUpdate where id=@idUpdate';

module.exports = {productTable:productTable,
    getAllProducts:getAllProducts,
    createProduct:createProduct,
    deleteProduct:deleteProduct,
    updateProduct:updateProduct};
const mssql = require('mssql');
let dbConfig= {
    user: 'sa',
    password: 'Winter2019',
    server: 'localhost',
    database: 'malik'
};

mssql.connect(dbConfig,(error)=>{
    if(error) {
        console.error('Error occurred during connecting database: ' + error.stack);
        return;
    }
    console.log('Database connection is successful');
});

module.exports = mssql;
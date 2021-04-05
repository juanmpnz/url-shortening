const Sequelize = require('sequelize')

const db = new Sequelize({
 dialect: 'sqlite',
    storage: 'sqlite/urlshorth.db' ,
    logging: false,  
  });


module.exports = db

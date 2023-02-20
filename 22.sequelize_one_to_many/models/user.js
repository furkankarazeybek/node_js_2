const { Sequelize,DataTypes } = require('sequelize')
const sequelize = new Sequelize('nodejs_orm','root','',{
    host: 'localhost',
    dialect: 'mysql'
})


const User=sequelize.define('User',{
   
     firstName: {
        type:DataTypes.STRING,
        allowNull: false
     },
     surName: {
        type:DataTypes.STRING,
        allowNull: false
     },
     age: {
        type:DataTypes.SMALLINT,
        allowNull: false,
        defaultValue:0
     }
});

module.exports=User;
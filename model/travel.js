const sequelize =require('../database/connect')
const Sequelize = require('sequelize')

const travel= sequelize.define('travels',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allownull:false
    },
    name:{
        type:Sequelize.STRING
    },

    depart:{
        type:Sequelize.STRING
    },
    
    arrival:{
        type:Sequelize.STRING
    },
    flightpackage:{
        type:Sequelize.STRING
    },
    date:{
      type:Sequelize.DATE,
      allownull:false
    },
    token:{
        type:Sequelize.STRING
    }

})



module.exports=travel
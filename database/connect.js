const Sequelize=require('sequelize')

const sequelize= new Sequelize('appiontment-booking',"root",'Bafoo2019*',{
    host:'localhost',
    dialect:'mysql'
})


module.exports=sequelize
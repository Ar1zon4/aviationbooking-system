const express =require('express')
const path =require('path')
const sequelize =require('./database/connect')
const travelRoutes=require('./routes/travels')

const bodyparser=require('body-parser')

const appointment=require('./model/travel')
const app =express()

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.set('view engine', 'ejs')

sequelize.sync( )

app.use(travelRoutes)

app.listen(3000,user=>{
    console.log("port working")
})




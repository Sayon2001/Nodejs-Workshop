// const app = require('express')()
const express = require('express')
const app = express()
require('dotenv').config()

app.set('view engine','ejs')
require("./model/index")

app.get('/',(req,res)=>{
    const data = {
        name : "Manish Basnet", 
        age : 22, 
        location : 'itahari'
    }
    const nepal = {
        continent : 'asia', 
    }
    res.render("home.ejs",{
        haha : data, 
        hehe : nepal
    })
})

app.get('/about',(req,res)=>{
    res.render("test/about")
})


app.use(express.static('public/css/'))

app.listen(3000,()=>{
    console.log("project suru vayo hai tw nodejs ko")
})
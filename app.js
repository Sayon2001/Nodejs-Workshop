// const app = require('express')()
require('dotenv').config()
const express = require('express')
const { blogs } = require('./model/index')
const app = express()

app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
require("./model/index")

app.get('/create',function(req,res){
    res.render('create.ejs')
})

app.post('/create',async function(req,res){
    const {title,subtitle,description,image} =req.body
    await blogs.create({
        title : title,
        subtitle : subtitle,
        description : description,
        image : image
    })
    res.send('Blog added successfully')
})

app.use(express.static('public/css/'))

app.listen(3000,()=>{
    console.log("project suru vayo hai tw nodejs ko")
})
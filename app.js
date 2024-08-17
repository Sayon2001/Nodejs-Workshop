const express = require('express')
const ejs = require('ejs');

const app = express()

app.set('view engine',ejs)

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/about',(req,res)=>{
    res.send("This is about page")
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
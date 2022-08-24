const express = require('express');
const hbs = require('hbs');
const path = require('path');
require('dotenv').config();
const { PORT } = require('../config/constants');

const port = PORT;
const app = express();

const public_path = path.join(__dirname, '../public');
const views_path = path.join(__dirname, '../views');

app.use(express.static(public_path));
app.use(express.urlencoded({ extended : false}));
app.use(express.json());
app.set('views', views_path);
app.set('view engine','hbs');


app.get('/', (req, res)=>{
    res.render('index');
});




app.listen(port, ()=>{
    console.log('App Started on port',port);
})
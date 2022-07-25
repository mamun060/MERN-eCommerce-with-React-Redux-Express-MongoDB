// const express = require('express');
// const products = require('./data/products');
// const dotenv = require("dotenv");
// const connectDB = require('./config/db.js');

import 'colors'
import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import products from './data/products.js'


dotenv.config();

connectDB()

const app = express();

app.get('/', (req, res)=>{
    res.send("API si running....");
})

app.get('/api/products', ( req, res )=>{
    res.json(products)
})

app.get('/api/products/:id', (req, res)=>{
    const product = products.find((p)=> p._id === req.params.id);
    res.json(product);
})

const PORT = process.env.PORT || 5000 ;

app.listen(PORT, console.log(`server running port ${PORT}`.yellow.bold));
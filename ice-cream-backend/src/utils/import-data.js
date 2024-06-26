// import mongoose from 'mongoose';
// import fs from 'fs';
const mongoose = require('mongoose');
const fs= require('fs');

const { IceCream } = require('./../models/ice-cream');
// import { IceCream } from '../models/ice-cream'
// import { getAllIceCream, addIceCream } from '../services/ice-cream';
// console.log(addIceCream);

//require environment variable (npm)
// const dotenv = require('dotenv');
// const { deleteMany } = require('../../models/modeltours');

//including environment file
// dotenv.config({ path: './../../.env' });

//REPLACE the password as database_password.
// const DB= process.env.DBURL;

//connect to Mongoose
// mongoose.connect(DB).then(con=>{
//     //console.log(con.connections);
//     console.log('DB connection successful');
// });


const iceCreamData = JSON.parse(fs.readFileSync('./files/ice-cream-data.json', 'utf-8'));
console.log(iceCreamData);
//import data into DB
const importData= async ()=>{
    try{
        await addIceCream(iceCreamData);
        // await IceCream.create(iceCreamData);
        console.log('iceCreamData successfuly loaded');
    } catch(err){
        console.log(err);
    }
    process.exit();
}

//Delete all data from DB
//Command for delete is node fileName.js --delete
const DeleteData= async ()=>{
    try{
        await IceCream.deleteMany();
        console.log('DB deleted');
    } catch(err){
        console.log(err);
    }
    process.exit();
}

//console.log(process.argv);
// if(process.argv[2]==='--import'){
//     importData();
// } else if(process.argv[2]==='--delete'){
//     DeleteData();
// }

importData().then((res) => {
  console.log('Data addedd.');
}).catch((err) => {console.log(err)});
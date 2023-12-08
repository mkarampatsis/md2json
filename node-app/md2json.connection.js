const mongoose = require('mongoose');

require("dotenv").config();

const uri = process.env.ATLAS_URI;

const mongoConnect = async() => {
  try {  
    await mongoose.connect(uri);
    console.log('DB connected')
  } catch (error) {
    console.log('Error to db connection');
  }
}

module.exports = mongoConnect
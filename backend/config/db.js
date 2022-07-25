// const mongoose = require('mongoose');

import mongoose  from 'mongoose';

async function connectDB() {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI)
      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (err) {
      console.error(`Error: ${err.message}`.red.underline.bold)
      process.exit(1)
    }
  }

export default connectDB
// module.export = connectDB;
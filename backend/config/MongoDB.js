const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected database: ${connection.connection.host}`);
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectDB;

const mongoose = require('mongoose');

// MongoDB connection string and database name
const dbURL = 'mongodb+srv://tranvietanh2k3:final123@finaltest.ufz3b.mongodb.net/?retryWrites=true&w=majority&appName=finaltest'; // Use your actual URL

// Connect to MongoDB without deprecated options
const connectDB = async () => {
  try {
    await mongoose.connect(dbURL, {
      dbName: 'finaltest', // Replace with your actual database name
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

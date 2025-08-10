// config/db.js
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://ismailkhan194714:9sC0VWurP3YoIGQF@pakfiller1.wgl0knf.mongodb.net/pakfiller_db?retryWrites=true&w=majority&appName=Pakfiller1');
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

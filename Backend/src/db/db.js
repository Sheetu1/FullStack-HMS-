import mongoose from "mongoose";

export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log('Database connected');
    })
    .catch((err) => {
      console.error("MongoDB connection failed:", err.message);
    });
};


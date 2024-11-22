import mongoose from 'mongoose';
import { config } from './dotenv';

export const connectDatabase = async () => {
    try {
        await mongoose.connect(config.mongoUri); // No need for extra options in modern drivers
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

import mongoose from 'mongoose';
import {DB_URI, NODE_ENV} from "../config/env.js";


if(!DB_URI) {
    throw new Error('Please define the URI environment variable in .env file')
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to database in  ${NODE_ENV} mode`);
    } catch(err) {
        console.error("MongoDB connection error", err);
        process.exit(1);
    }
}

export default connectToDatabase;
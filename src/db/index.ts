import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const mongooseURI = process.env.MOGODB_URI

export const connect = async () => {
    try {
        console.log(`mongodb uri: ${mongooseURI}`);
        const connectionInstance = await mongoose.connect(mongooseURI!);
        console.log(`Connected to MongoDB, host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`error connecting to MongoDB: ${error}`);
    }
}
import mongoose, { Document } from "mongoose";

export interface ITrafficUpdate extends Document {
    road_id: mongoose.Types.ObjectId;
    timestamp: Date;
    traffic_condition: string;
}
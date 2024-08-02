import mongoose, { Document } from "mongoose";

export interface IRoad extends Document {
    start_location_id: mongoose.Types.ObjectId;
    end_location_id: mongoose.Types.ObjectId;
    distance: number;
    traffic_condition: number;
}
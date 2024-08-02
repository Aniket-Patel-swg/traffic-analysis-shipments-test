import mongoose, { Schema } from 'mongoose';
import { ITrafficUpdate } from './interfaces/TrafficUpdate.interface';

const TrafficUpdateSchema = new Schema({
    road_id: { type: mongoose.Types.ObjectId, ref: 'Road', required: true },
    timestamp: { type: Date, required: true },
    traffic_condition: { type: String, required: true }
});

export const TrafficUpdate = mongoose.model<ITrafficUpdate>('TrafficUpdate', TrafficUpdateSchema);
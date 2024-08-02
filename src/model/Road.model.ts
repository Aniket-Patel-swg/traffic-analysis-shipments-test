import mongoose, { Schema } from 'mongoose';
import { IRoad } from './interfaces/Road.interface';

const RoadSchema = new Schema({
    start_location_id: { type: mongoose.Types.ObjectId, ref: 'Location', required: true },
    end_location_id: { type: mongoose.Types.ObjectId, ref: 'Location', required: true },
    distance: { type: Number, required: true },
    traffic_condition: { type: Number, required: true }
});

export const Road = mongoose.model<IRoad>('Road', RoadSchema);
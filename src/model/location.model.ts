import mongoose from 'mongoose';
import { ILocation } from './interfaces/Location.interface';

const LocationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
});

export const Location = mongoose.model<ILocation>('Location', LocationSchema);




import { Document } from "mongoose";

export interface ILocation extends Document {
    name: string;
    latitude: number;
    longitude: number;
}
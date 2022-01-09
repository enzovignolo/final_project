import { Document } from 'mongoose';

export interface IProduct extends Document {
	name: String;
	price: number;
	stock: Number;
	thumbnail: String;
	createdAt: Date;
	updatedAt: Date;
	category: String;
}

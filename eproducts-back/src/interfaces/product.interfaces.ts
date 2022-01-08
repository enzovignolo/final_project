import { Document } from 'mongoose';

export interface IProduct extends Document {
	name: String;
	price: Number;
	stock: Number;
	images: String[];
	createdAt: Date;
	updatedAt: Date;
}

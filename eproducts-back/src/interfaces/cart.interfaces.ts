import { Document } from 'mongoose';
import { IProduct } from './product.interfaces';
import { IUser } from './user.interfaces';

export interface ICart extends Document {
	products: IProduct[];
	user: IUser;
	createdAt: Date;
	updatedAt: Date;
}

import { Document } from 'mongoose';
import { IProduct } from './product.interfaces';
import { IUser } from './user.interfaces';

export interface IPurchase extends Document {
	buyer: IUser;
	products: IProduct[];
}

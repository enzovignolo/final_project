import { Model } from 'mongoose';
import { ICart } from './cart.interfaces';
import { IProduct } from './product.interfaces';
import { IUser } from './user.interfaces';

export interface IModels {
	ProductModel: Model<IProduct>;
	UserModel: Model<IUser>;
	CartModel: Model<ICart>;
}

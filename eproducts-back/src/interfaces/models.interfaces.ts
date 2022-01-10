import { Model } from 'mongoose';
import { ICart } from './cart.interfaces';
import { IChat } from './chat.interfaces';
import { IProduct } from './product.interfaces';
import { IPurchase } from './purchase.interfaces';
import { IUser } from './user.interfaces';

export interface IModels {
	ProductModel: Model<IProduct>;
	UserModel: Model<IUser>;
	CartModel: Model<ICart>;
	PurchaseModel: Model<IPurchase>;
	ChatModel: Model<IChat>;
}

import { Model } from 'mongoose';
import { ICart } from '../../interfaces/cart.interfaces';
import { IProduct } from '../../interfaces/product.interfaces';
import { IUser } from '../../interfaces/user.interfaces';
import CartModel from './cart.model';
import ProductModel from './product.model';
import UserModel from './user.model';

const Models = {
	ProductModel: ProductModel,
	UserModel: UserModel,
	CartModel: CartModel,
};
export default Models;

import { Document } from 'mongoose';
import { ICart } from './cart.interfaces';

export interface IUser extends Document {
	firstname: string;
	lastname: string;
	email: string;
	phoneNumber?: string;
	address: string;
	password: string;
	passwordConfirmation?: string;
	photo: string;
	cart: ICart;
	createdAt: Date;
	updatedAt: Date;
	role: string;
}

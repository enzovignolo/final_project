import { ICart } from './cart.interfaces';

export interface IUser {
	firstname: String;
	lastname: String;
	email: String;
	phoneNumber?: String;
	address: String;
	password: String;
	passwordConfirmation?: String;
	photo: String;
	cart: ICart;
	createdAt: Date;
	updatedAt: Date;
}

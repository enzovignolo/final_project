import { ICart } from './cart.interfaces';

export interface IUser {
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
}

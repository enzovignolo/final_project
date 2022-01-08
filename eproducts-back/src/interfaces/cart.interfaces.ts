import { IProduct } from './product.interfaces';
import { IUser } from './user.interfaces';

export interface ICart {
	products: IProduct[];
	user: IUser;
	createdAt: Date;
	updatedAt: Date;
}

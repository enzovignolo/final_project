import { ICart } from './cart.interfaces';
import { Repositories } from './repository.interfaces';

export interface IService {
	getAll();
	getOne(id: string);
	addOne(data: Object);
	updateOne(id: string, data: Object);
	deleteOne(id: string);
}
export interface IProductServices extends IService {}
export interface IUserServices extends IService {}
export interface ICartServices extends IService {
	getOneDetailed(id: string);
	addProductToCart(cartId: string, productId: string);
}
export interface IAuthServices {
	login(email: string, password: string);
	isLogged(token: string);
}
export interface Services {
	productServices: IProductServices;
	userServices: IUserServices;
	cartServices: ICartServices;
	authServices: IAuthServices;
}

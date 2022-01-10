import { ICart } from './cart.interfaces';
import { Repositories } from './repository.interfaces';

export interface IService {
	getAll();
	getOne(id: string);
	addOne(data: Object);
	updateOne(id: string, data: Object);
	deleteOne(id: string);
}
export interface IProductServices extends IService {
	getFiltered(queryObj: {});
}
export interface IUserServices extends IService {}
export interface ICartServices extends IService {
	getOneDetailed(id: string);
	addProductToCart(cartId: string, productId: string);
	deleteFromCart(cartId: string, productId: string);
	purchaseCart(cartId: string, email: string);
}
export interface IAuthServices {
	login(email: string, password: string);
	isLogged(token: string);
}
export interface MailData {
	subject?: String;
	bodyText?: String;
	htmlText?: String;
	receiver: String;
}
export interface INotificationServices {
	sendGmailEmail(MailData: MailData);
}

export interface IPurchaseServices extends IService {}
export interface IChatServices extends IService {
	newMsg(msg: { userEmail: string; message: string });
	getEmailFiltered(email: string);
}
export interface Services {
	productServices: IProductServices;
	userServices: IUserServices;
	cartServices: ICartServices;
	authServices: IAuthServices;
	notificationServices: INotificationServices;
	purchaseServices: IPurchaseServices;
	chatServices: IChatServices;
}

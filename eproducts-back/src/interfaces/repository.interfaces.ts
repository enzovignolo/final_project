import { Model } from 'mongoose';
import { ICart } from './cart.interfaces';

export interface IRepository {
	getAll(Model: Model<any>): any;
	getOne(Model: Model<any>, id: string): any;
	deleteOne(Model: Model<any>, id: string): any;
	updateOne(Model: Model<any>, id: string, data: Object): any;
	addOne(Model: Model<any>, Object): any;
}

export interface IProductRepository extends IRepository {
	getFiltered(filter: Object, sortBy: Object);
}

export interface IUserRepository extends IRepository {
	getByEmail(email: string);
}

export interface ICartRepository extends IRepository {
	getOneDetailed(id: string);
}
export interface Repositories {
	productRepository: IProductRepository;
	userRepository: IUserRepository;
	cartRepository: ICartRepository;
}

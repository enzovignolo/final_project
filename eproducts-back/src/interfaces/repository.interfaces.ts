import { Model } from 'mongoose';

export interface IRepository {
	getAll(Model: Model<any>): any;
	getOne(Model: Model<any>, id: string): any;
	deleteOne(Model: Model<any>, id: string): any;
	updateOne(Model: Model<any>, id: string, data: Object): any;
	addOne(Model: Model<any>, Object): any;
}

export interface IProductRepository extends IRepository {}

export interface IUserRepository extends IRepository {}
export interface Repositories {
	productRepository: IProductRepository;
	userRepository: IUserRepository;
}

import ProductModel from '../db/Models/product.model';
import productRepository from '../db/repositories/index';
import { IProduct } from '../interfaces/product.interfaces';
import {
	IProductRepository,
	Repositories,
} from '../interfaces/repository.interfaces';

const getAll = async ({ productRepository }: Repositories) => {
	try {
		return await productRepository.getAll(ProductModel);
	} catch (err) {
		console.log(err);
		throw err;
	}
};
const getOne = async ({ productRepository }: Repositories, productId) => {
	try {
		return await productRepository.getOne(ProductModel, productId);
	} catch (err) {
		console.log(err);
		throw err;
	}
};
const updateOneById = async (
	{ productRepository }: Repositories,
	productId,
	data: Partial<IProduct>
) => {
	try {
		return await productRepository.updateOne(ProductModel, productId, data);
	} catch (err) {
		console.log(err);
		throw err;
	}
};
const deleteOne = async ({ productRepository }: Repositories, id: string) => {
	try {
		await productRepository.deleteOne(ProductModel, id);
		return;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
const addOne = async ({ productRepository }: Repositories, data: IProduct) => {
	try {
		const newProduct = await productRepository.addOne(ProductModel, data);
		return newProduct;
	} catch (err) {
		console.log(err);
		throw err;
	}
};

export default {
	getAll,
	getOne,
	updateOneById,
	deleteOne,
	addOne,
};

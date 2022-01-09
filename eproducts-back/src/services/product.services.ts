import { IError } from '../interfaces/error.interfaces';
import { IProduct } from '../interfaces/product.interfaces';
import { Repositories } from '../interfaces/repository.interfaces';
import filterBuilder from './helpers/filterBuilder';
import serviceFactory from './serviceFactory';

export default ({ productRepository }: Repositories, { ProductModel }) => ({
	async getAll() {
		try {
			return await serviceFactory.getAll(productRepository, ProductModel);
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async getOne(id) {
		try {
			return await serviceFactory.getOne(productRepository, ProductModel, id);
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async updateOne(id, data: Partial<IProduct>) {
		try {
			return await serviceFactory.updateOneById(
				productRepository,
				ProductModel,
				id,
				data
			);
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async deleteOne(id: string) {
		try {
			await serviceFactory.deleteOne(productRepository, ProductModel, id);
			return;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async addOne(data: IProduct) {
		try {
			const newProduct = await productRepository.addOne(ProductModel, data);
			return newProduct;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async getFiltered(queryObj) {
		try {
			let filter = {};
			let sortBy = {};

			//Build the filter from the query string

			filter = filterBuilder(queryObj);
			console.log('el objjj', queryObj);
			if (queryObj.sort) {
				/* const dir = queryObj.sortDir == 'asc' ? '' : '-';
				sortBy = `${dir || ''}${queryObj.sortBy}`; */
				sortBy = queryObj.sort;
			}

			const products = await productRepository.getFiltered(filter, sortBy);

			if (!products) {
				const err: IError = new Error('No products was loaded');
				err.status = 404;
				throw err;
			}
			return products;
		} catch (err) {
			throw err;
		}
	},
});

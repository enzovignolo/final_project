import { IProduct } from '../interfaces/product.interfaces';
import { Repositories } from '../interfaces/repository.interfaces';
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
});

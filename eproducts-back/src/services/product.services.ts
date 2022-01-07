import { IProduct } from '../interfaces/product.interfaces';
import { Repositories } from '../interfaces/repository.interfaces';

export default ({ productRepository }: Repositories, { ProductModel }) => ({
	async getAll() {
		try {
			return await productRepository.getAll(ProductModel);
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async getOne(productId) {
		try {
			return await productRepository.getOne(ProductModel, productId);
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async updateOneById(productId, data: Partial<IProduct>) {
		try {
			return await productRepository.updateOne(ProductModel, productId, data);
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async deleteOne(id: string) {
		try {
			await productRepository.deleteOne(ProductModel, id);
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

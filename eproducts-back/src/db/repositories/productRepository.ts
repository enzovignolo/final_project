import { IModels } from '../../interfaces/models.interfaces';
import baseRepository from './baseRepository';

const productRepository = ({ ProductModel }: IModels) => ({
	...baseRepository,
	async getFiltered(filter: {}, sortBy: {}) {
		try {
			console.log('aaa', sortBy);
			const products = await ProductModel.find(filter).sort(sortBy);
			return products;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
});

export default productRepository;

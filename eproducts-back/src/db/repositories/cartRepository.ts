import { IModels } from '../../interfaces/models.interfaces';
import baseRepository from './baseRepository';

const cartRepository = ({ CartModel }: IModels) => ({
	...baseRepository,
	async getOneDetailed(id: string) {
		try {
			const cart = await CartModel.findById(id)
				.populate({ path: 'user' })
				.populate('products');
			return cart;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
});

export default cartRepository;

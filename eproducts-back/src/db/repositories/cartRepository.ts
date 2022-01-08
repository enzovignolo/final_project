import { Document } from 'mongoose';
import { ICart } from '../../interfaces/cart.interfaces';
import { IModels } from '../../interfaces/models.interfaces';
import baseRepository from './baseRepository';

const cartRepository = ({ CartModel }: IModels) => ({
	...baseRepository,
	async getOneDetailed(id: string): Promise<Document<ICart>> {
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
	async addProduct(id: string) {
		try {
			const cart = await CartModel.findById(id);
			cart.products.push();
		} catch (err) {}
	},
});

export default cartRepository;

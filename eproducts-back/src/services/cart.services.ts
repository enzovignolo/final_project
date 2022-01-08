import { Document } from 'mongoose';
import { ICart } from '../interfaces/cart.interfaces';
import { IError } from '../interfaces/error.interfaces';
import { IModels } from '../interfaces/models.interfaces';
import { Repositories } from '../interfaces/repository.interfaces';
import { IUser } from '../interfaces/user.interfaces';
import serviceFactory from './serviceFactory';

export default (
	{ cartRepository, productRepository }: Repositories,
	{ CartModel, ProductModel }: IModels
) => ({
	async getAll() {
		try {
			const carts: ICart = await serviceFactory.getAll(
				cartRepository,
				CartModel
			);
			return carts;
		} catch (err) {
			throw err;
		}
	},
	async getOne(id: string) {
		try {
			const cart: ICart = await serviceFactory.getOne(
				cartRepository,
				CartModel,
				id
			);
			return cart;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async addOne(data: ICart) {
		try {
			const newCart = serviceFactory.addOne(cartRepository, CartModel, data);
			return newCart;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async updateOne(id: string, data: Partial<ICart>) {
		try {
			const updated = serviceFactory.updateOneById(
				cartRepository,
				CartModel,
				id,
				data
			);
			return updated;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async deleteOne(id: string) {
		try {
			await serviceFactory.deleteOne(cartRepository, CartModel, id);
			return;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	/**
	 *
	 * @param id Cart id
	 *  return IProduct[]
	 */
	async getOneDetailed(id: string) {
		try {
			const detailedCart = cartRepository.getOneDetailed(id);
			return detailedCart;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async addProductToCart(cartId: string, productId: string) {
		try {
			const product = await productRepository.getOne(ProductModel, productId);
			if (!product) {
				const err: IError = new Error('There is no product with that id');
				err.status = 404;
				throw err;
			}

			const cart: ICart = await cartRepository.getOneDetailed(cartId);

			cart.products.push(product._id);
			const updated = await cart.save();

			return updated;
		} catch (err) {
			throw err;
		}
	},
});

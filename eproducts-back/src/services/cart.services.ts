import userRepository from '../db/repositories/userRepository';
import { ICart } from '../interfaces/cart.interfaces';
import { IError } from '../interfaces/error.interfaces';
import { IModels } from '../interfaces/models.interfaces';
import { Repositories } from '../interfaces/repository.interfaces';
import serviceFactory from './serviceFactory';

export default (
	{
		cartRepository,
		productRepository,
		purchaseRepository,
		userRepository,
	}: Repositories,
	{ CartModel, ProductModel, PurchaseModel }: IModels
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
	async deleteFromCart(cartId, productId) {
		try {
			const cart: ICart = await cartRepository.getOneDetailed(cartId);
			const prodsUpdated = cart.products.filter((product) => {
				console.log(product);
				return product._id != productId;
			});

			cart.products = prodsUpdated;
			await cart.save();
			return cart;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	//This service empties the cart and create a purchase
	async purchaseCart(cartId: string, email: string) {
		try {
			const cart: ICart = await cartRepository.getOneDetailed(cartId);
			let finalPurchase: {
				products: String[];
				totalCost: number;
				prodIds: String[];
			} = {
				products: [],
				prodIds: [],
				totalCost: 0,
			};

			for (let product of cart.products) {
				finalPurchase.products.push(product.name);
				finalPurchase.totalCost += product.price;
				finalPurchase.prodIds.push(product._id);
			}
			await purchaseRepository.addOne(PurchaseModel, {
				buyer: cart.user._id,
				products: finalPurchase.prodIds,
				totalCost: finalPurchase.totalCost,
			});
			cart.products = [];
			await cart.save();
			return finalPurchase;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
});

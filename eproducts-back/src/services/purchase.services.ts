import { Models } from 'mongoose';
import { Repositories } from '../interfaces/repository.interfaces';

export default (
	{ purchaseRepository }: Repositories,
	{ PurchaseModel }: Models
) => ({
	async getAll() {
		try {
			const purchases = await purchaseRepository.getAll(PurchaseModel);
			return purchases;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async addOne(data: Object) {
		try {
			const newPurchase = await purchaseRepository.addOne(PurchaseModel, data);
			return newPurchase;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async getOne(id: string) {
		try {
			const purchase = await purchaseRepository.getOne(PurchaseModel, id);
			return purchase;
		} catch (err) {
			throw err;
		}
	},
	async updateOne(id: string, data: Object) {
		try {
			const updated = await purchaseRepository.updateOne(
				PurchaseModel,
				id,
				data
			);
			return data;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async deleteOne(id: string) {
		try {
			await purchaseRepository.deleteOne(PurchaseModel, id);
			return;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
});

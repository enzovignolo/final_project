import { NextFunction, Request, Response } from 'express';
import { Services } from '../../interfaces/services.interfaces';

export default ({ purchaseServices }: Services) => ({
	async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const purchases = await purchaseServices.getAll();
			return res.status(200).json(purchases);
		} catch (err) {
			next(err);
		}
	},
	async getOne(req: Request, res: Response, next: NextFunction) {
		try {
			const purchase = await purchaseServices.getOne(req.params.id);
			return res.status(200).json(purchase);
		} catch (err) {
			next(err);
		}
	},
	async addOne(req: Request, res: Response, next: NextFunction) {
		try {
			const newPurchase = await purchaseServices.addOne(req.body);
			return res.status(201).json(newPurchase);
		} catch (err) {
			next(err);
		}
	},
	async updateOne(req: Request, res: Response, next: NextFunction) {
		try {
			const updated = await purchaseServices.updateOne(req.params.id, req.body);
			return res.status(200).json(updated);
		} catch (err) {
			next(err);
		}
	},
	async deleteOne(req: Request, res: Response, next: NextFunction) {
		try {
			await purchaseServices.deleteOne(req.params.id);
			return;
		} catch (err) {
			next(err);
		}
	},
});

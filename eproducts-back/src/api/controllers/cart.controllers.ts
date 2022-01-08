import { NextFunction, Request, Response } from 'express';
import { Services } from '../../interfaces/services.interfaces';
import controllerFactory from './controllerFactory';

export default ({ cartServices }: Services) => ({
	getAll(req: Request, res: Response, next: NextFunction) {
		controllerFactory.getAll(req, res, next, cartServices);
	},
	getOne(req: Request, res: Response, next: NextFunction) {
		controllerFactory.getOne(req, res, next, cartServices);
	},
	addOne(req: Request, res: Response, next: NextFunction) {
		controllerFactory.addOne(req, res, next, cartServices);
	},
	updateOne(req: Request, res: Response, next: NextFunction) {
		controllerFactory.updateOne(req, res, next, cartServices);
	},
	deleteOne(req: Request, res: Response, next: NextFunction) {
		controllerFactory.deleteOne(req, res, next, cartServices);
	},
	async getOneDetailed(req: Request, res: Response, next: NextFunction) {
		try {
			const cart = await cartServices.getOneDetailed(req.params.id);
			return res.status(200).json(cart);
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
});

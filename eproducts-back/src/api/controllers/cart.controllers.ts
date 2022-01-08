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
			const id = req.session.user.cartId;
			const cart = await cartServices.getOneDetailed(id);
			return res.status(200).json(cart);
		} catch (err) {
			console.log(err);
			next(err);
		}
	},
	async addProductToCart(req: Request, res: Response, next: NextFunction) {
		try {
			const { email, cartId } = req.session.user;
			const { prodId } = req.body;
			const cart = await cartServices.addProductToCart(cartId, prodId);
			return res.status(200).json({ cart });
		} catch (err) {
			next(err);
		}
	},
});

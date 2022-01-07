import { NextFunction, Request, Response } from 'express';
import controllerFactory from './controllerFactory';

export default ({ productServices }) => ({
	getAll(req: Request, res: Response, next: NextFunction) {
		controllerFactory.getAll(req, res, next, productServices);
	},

	addOne(req: Request, res: Response, next: NextFunction) {
		controllerFactory.addOne(req, res, next, productServices);
	},

	getOne(req: Request, res: Response, next: NextFunction) {
		controllerFactory.getOne(req, res, next, productServices);
	},

	updateOne(req: Request, res: Response, next: NextFunction) {
		controllerFactory.updateOne(req, res, next, productServices);
	},

	deleteOne(req: Request, res: Response, next: NextFunction) {
		controllerFactory.deleteOne(req, res, next, productServices);
	},
});

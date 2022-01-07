import { NextFunction, Request, Response } from 'express';

import controllerFactory from './controllerFactory';

export default ({ userServices }) => ({
	getAll(req: Request, res: Response, next: NextFunction) {
		controllerFactory.getAll(req, res, next, userServices);
	},
	getOne(req: Request, res: Response, next: NextFunction) {
		controllerFactory.getOne(req, res, next, userServices);
	},
	addOne(req: Request, res: Response, next: NextFunction) {
		controllerFactory.addOne(req, res, next, userServices);
	},

	updateOne(req: Request, res: Response, next: NextFunction) {
		controllerFactory.updateOne(req, res, next, userServices);
	},
	deleteOne(req: Request, res: Response, next: NextFunction) {
		controllerFactory.deleteOne(req, res, next, userServices);
	},
});

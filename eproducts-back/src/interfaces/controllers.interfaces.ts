import { NextFunction, Request } from 'express';

export interface IController {
	getAll(req: Request, res: Response, next: NextFunction): any;
	getOne(req: Request, res: Response, next: NextFunction): any;
	addOne(req: Request, res: Response, next: NextFunction): any;
	updateOne(req: Request, res: Response, next: NextFunction): any;
	deleteOne(req: Request, res: Response, next: NextFunction): any;
}

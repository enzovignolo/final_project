import { NextFunction, Request, Response } from 'express';
import { ICart } from './cart.interfaces';

export interface IController {
	getAll(req: Request, res: Response, next: NextFunction): any;
	getOne(req: Request, res: Response, next: NextFunction): any;
	addOne(req: Request, res: Response, next: NextFunction): any;
	updateOne(req: Request, res: Response, next: NextFunction): any;
	deleteOne(req: Request, res: Response, next: NextFunction): any;
}

export interface ICartControllers extends IController {
	getOneDetailed(req: Request, res: Response, next: NextFunction);
	addProductToCart(req: Request, res: Response, next: NextFunction);
	deleteFromCart(req: Request, res: Response, next: NextFunction);
}

export interface IProductControllers extends IController {}
export interface IUserControllers extends IController {}

export interface IAuthControllers {
	login(req: Request, res: Response, next: NextFunction);
	signUp(req: Request, res: Response, next: NextFunction);
	isLogged(req: Request, res: Response, next: NextFunction);
}
export interface Controllers {
	productControllers: IProductControllers;
	userControllers: IUserControllers;
	cartControllers: ICartControllers;
	authControllers: IAuthControllers;
}

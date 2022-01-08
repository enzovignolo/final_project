import { NextFunction, Request, Response } from 'express';
import { Services } from '../../interfaces/services.interfaces';

export default ({ authServices }: Services) => ({
	login(req: Request, res: Response, next: NextFunction) {},
	signUp(req: Request, res: Response, next: NextFunction) {},
	isLoggedIn(req: Request, res: Response, next: NextFunction) {},
});

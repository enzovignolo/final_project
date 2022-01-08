import { NextFunction, Request, Response } from 'express';
import { Services } from '../../interfaces/services.interfaces';
import { IUser } from '../../interfaces/user.interfaces';

export default ({ authServices, userServices }: Services) => ({
	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const { email, password } = req.body;
			if (!email || !password) {
				const err = new Error('Please indicate email and password');
				next(err);
			}
			const token = await authServices.login(email, password);
			if (!token) {
				const err = new Error('Credentials were not correct, please try again');
				throw err;
			}
			return res.status(200).json({ token });
		} catch (err) {
			next(err);
		}
	},
	async signUp(req: Request, res: Response, next: NextFunction) {
		try {
			const newUser: IUser = await userServices.addOne(req.body);
			const token = await authServices.login(newUser.email, req.body.password);

			return res.status(200).json({ token });
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async isLogged(req: Request, res: Response, next: NextFunction) {
		try {
			const token = req.headers.authorization?.split(' ')[1] || '';

			const isLogged = await authServices.isLogged(token);
			if (!isLogged) {
				const err = new Error('User is not logged');
				throw err;
			}
			return res.status(200).json(isLogged);
		} catch (err) {
			next(err);
		}
	},
});

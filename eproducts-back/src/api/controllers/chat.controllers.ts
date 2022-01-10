import { NextFunction, Request, Response } from 'express';
import { Services } from '../../interfaces/services.interfaces';

export default ({ chatServices }: Services) => ({
	async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const messages = await chatServices.getAll();
			return res.status(200).json(messages);
		} catch (err) {
			console.log(err);
			next(err);
		}
	},
	async addOne(req: Request, res: Response, next: NextFunction) {
		try {
			const newMsg = await chatServices.addOne(req.body);
			return res.status(201).json(newMsg);
		} catch (err) {
			console.log(err);
			next(err);
		}
	},
	async getOne(req: Request, res: Response, next: NextFunction) {
		try {
			const message = await chatServices.getOne(req.params.id);
			return res.status(200).json(message);
		} catch (err) {
			console.log(err);
			next(err);
		}
	},
	async updateOne(req: Request, res: Response, next: NextFunction) {
		try {
			const updated = await chatServices.updateOne(req.params.id, req.body);
			return res.status(200).json(updated);
		} catch (err) {
			console.log(err);
			next(err);
		}
	},
	async deleteOne(req: Request, res: Response, next: NextFunction) {
		try {
			await chatServices.deleteOne(req.params.id);
			return res.status(203).json();
		} catch (err) {
			console.log(err);
			next(err);
		}
	},

	viewAllMessages(req: Request, res: Response, next: NextFunction) {
		res.render('chat.ejs', { email: 'email@email.com' });
	},
	viewFilteredMessages(req: Request, res: Response, next: NextFunction) {
		res.render('filteredChat.ejs', {
			email: req.params.email,
		});
	},
});

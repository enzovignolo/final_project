import { Router } from 'express';
import userControllers from '../controllers/user.controllers';

export default ({ userControllers }) => {
	const router = Router();

	router.route('/').get(userControllers.getAll).post(userControllers.addOne);

	router
		.route('/:id')
		.get(userControllers.getOne)
		.put(userControllers.updateOne)
		.delete(userControllers.deleteOne);
	return router;
};

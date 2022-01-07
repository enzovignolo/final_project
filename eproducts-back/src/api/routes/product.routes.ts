import { Router } from 'express';
import controllers from '../controllers';

export default ({ productControllers }) => {
	const router = Router();

	router
		.route('/')
		.get(productControllers.getAll)
		.post(productControllers.addOne);

	router
		.route('/:id')
		.get(productControllers.getOne)
		.put(productControllers.updateOne)
		.delete(productControllers.deleteOne);
	return router;
};

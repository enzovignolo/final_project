import { Router } from 'express';
import { Controllers } from '../../interfaces/controllers.interfaces';

export default ({ purchaseControllers }: Controllers) => {
	const router = Router();
	router
		.route('/')
		.get(purchaseControllers.getAll)
		.post(purchaseControllers.addOne);
	router
		.route('/:id')
		.get(purchaseControllers.getOne)
		.put(purchaseControllers.updateOne)
		.delete(purchaseControllers.deleteOne);
	return router;
};

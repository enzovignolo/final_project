import { Router } from 'express';
import { Controllers } from '../../interfaces/controllers.interfaces';
import controllers from '../controllers';

export default ({ productControllers }: Controllers) => {
	const router = Router();

	router
		.route('/')
		.get(productControllers.getAll)
		.post(productControllers.addOne);
	router.get('/filter', productControllers.getFiltered);
	router
		.route('/:id')
		.get(productControllers.getOne)
		.put(productControllers.updateOne)
		.delete(productControllers.deleteOne);
	return router;
};

import { Router } from 'express';
import { Controllers } from '../../interfaces/controllers.interfaces';

export default ({ cartControllers }: Controllers) => {
	const router = Router();
	router.route('/').get(cartControllers.getAll).post(cartControllers.addOne);
	router.route('/:id/detail').get(cartControllers.getOneDetailed);
	router
		.route('/:id')
		.get(cartControllers.getOne)
		.put(cartControllers.updateOne)
		.delete(cartControllers.deleteOne);
	return router;
};

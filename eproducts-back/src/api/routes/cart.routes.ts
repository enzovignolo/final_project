import { Router } from 'express';
import { Controllers } from '../../interfaces/controllers.interfaces';

export default ({ cartControllers, authControllers }: Controllers) => {
	const router = Router();
	router.route('/').get(cartControllers.getAll).post(cartControllers.addOne);
	router
		.route('/userCart')
		.get(authControllers.isLogged, cartControllers.getOneDetailed)
		.put(authControllers.isLogged, cartControllers.addProductToCart);
	router
		.route('/:id')
		.get(cartControllers.getOne)
		.put(cartControllers.updateOne)
		.delete(cartControllers.deleteOne);
	return router;
};

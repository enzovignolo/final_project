import { Router } from 'express';
import { Controllers } from '../../interfaces/controllers.interfaces';

export default ({ chatControllers }: Controllers) => {
	const router = Router();
	router.route('/').get(chatControllers.viewAllMessages);

	return router;
};

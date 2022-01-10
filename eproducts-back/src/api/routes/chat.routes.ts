import { Router } from 'express';
import { Controllers } from '../../interfaces/controllers.interfaces';

export default ({ chatControllers }: Controllers) => {
	const router = Router();
	router.route('/chat').get(chatControllers.viewAllMessages);
	router.route('/chat/:email').get(chatControllers.viewFilteredMessages);
	return router;
};

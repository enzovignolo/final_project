import { Router } from 'express';
import { Controllers } from '../../interfaces/controllers.interfaces';

export default ({ authControllers }: Controllers) => {
	const router = Router();
	router.route('/login').post(authControllers.login);
	router.route('/signup').post(authControllers.signUp);
	router.route('/isLogged').get(authControllers.isLogged);
	router.route('/logout').get(authControllers.logout);
	return router;
};

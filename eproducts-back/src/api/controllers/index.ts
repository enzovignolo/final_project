import services from '../../services';
import productControllers from './product.controllers';
import userControllers from './user.controllers';

export default {
	productControllers: productControllers(services),
	userControllers: userControllers(services),
};

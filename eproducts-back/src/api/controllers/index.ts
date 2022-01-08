import services from '../../services';
import cartControllers from './cart.controllers';
import productControllers from './product.controllers';
import userControllers from './user.controllers';

export default {
	productControllers: productControllers(services),
	userControllers: userControllers(services),
	cartControllers: cartControllers(services),
};

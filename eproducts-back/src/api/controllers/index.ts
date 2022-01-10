import services from '../../services';
import authControllers from './auth.controllers';
import cartControllers from './cart.controllers';
import chatControllers from './chat.controllers';
import productControllers from './product.controllers';
import purchaseControllers from './purchase.controllers';
import userControllers from './user.controllers';

export default {
	productControllers: productControllers(services),
	userControllers: userControllers(services),
	cartControllers: cartControllers(services),
	authControllers: authControllers(services),
	purchaseControllers: purchaseControllers(services),
	chatControllers: chatControllers(services),
};

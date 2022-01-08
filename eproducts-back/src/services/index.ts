import Models from '../db/Models';
import repositories from '../db/repositories';
import authServices from './auth.services';
import cartServices from './cart.services';
import productServices from './product.services';
import userServices from './user.services';

export default {
	productServices: productServices(repositories, Models),
	userServices: userServices(repositories, Models),
	cartServices: cartServices(repositories, Models),
	authServices: authServices,
};

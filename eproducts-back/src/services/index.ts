import Models from '../db/Models';
import repositories from '../db/repositories';
import productServices from './product.services';
import userServices from './user.services';

export default {
	productServices: productServices(repositories, Models),
	userServices: userServices(repositories, Models),
};

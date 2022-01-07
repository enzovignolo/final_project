import Models from '../db/Models';
import repositories from '../db/repositories';
import productServices from './product.services';

export default {
	productServices: productServices(repositories, Models),
};

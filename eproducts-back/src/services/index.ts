import Models from '../db/Models';
import repositories from '../db/repositories';
import authServices from './auth.services';
import cartServices from './cart.services';
import chatServices from './chat.services';
import mailTransporter from './helpers/mailTransporter';
import notificationServices from './notification.services';
import productServices from './product.services';
import purchaseServices from './purchase.services';
import userServices from './user.services';

export default {
	productServices: productServices(repositories, Models),
	userServices: userServices(repositories, Models),
	cartServices: cartServices(repositories, Models),
	authServices: authServices(repositories),
	purchaseServices: purchaseServices(repositories, Models),
	notificationServices: notificationServices(mailTransporter),
	chatServices: chatServices(repositories, Models),
};

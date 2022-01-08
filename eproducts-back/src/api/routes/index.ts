import { Router } from 'express';
import controllers from '../controllers';
import productRoutes from '../routes/product.routes';
import userRoutes from '../routes/user.routes';
import authRoutes from './auth.routes';
import cartRoutes from './cart.routes';
const router = Router();

router.use('/products', productRoutes(controllers));
router.use('/users', userRoutes(controllers));
router.use('/carts', cartRoutes(controllers));
router.use('/auth', authRoutes(controllers));
export default router;

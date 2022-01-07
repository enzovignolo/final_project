import { Router } from 'express';
import controllers from '../controllers';
import productRoutes from '../routes/product.routes';
import userRoutes from '../routes/user.routes';
const router = Router();

router.use('/products', productRoutes(controllers));
router.use('/users', userRoutes(controllers));
export default router;

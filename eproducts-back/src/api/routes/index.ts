import { Router } from 'express';
import productRoutes from '../routes/product.routes';
const router = Router();

router.use('/products', productRoutes);
export default router;

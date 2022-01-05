import { Router } from 'express';
import productControllers from '../controllers/product.controllers.js';
const router = Router();
router.route('/').get(productControllers.getAll);
router.route('/:id').get(productControllers.getOne);
export default router;
//# sourceMappingURL=product.routes.js.map
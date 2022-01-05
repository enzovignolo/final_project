import { Router } from 'express';
import productControllers from '../controllers/product.controllers';

const router = Router();
router
	.route('/')
	.get(productControllers.getAll)
	.post(productControllers.addOne);

router
	.route('/:id')
	.get(productControllers.getOne)
	.put(productControllers.updateOne)
	.delete(productControllers.deleteOne);

export default router;

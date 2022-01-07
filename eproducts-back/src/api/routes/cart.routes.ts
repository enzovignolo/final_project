import { Router } from "express";


export default ({cartController})=>{
    const router = Router();
    router.route('/').get(cartController.getAll).post(cartController.addOne);
    router.route('/:id').get(cartController.getOne).put(cartController.updateOne).delete(cartController.deleteOne);
    return router;
}


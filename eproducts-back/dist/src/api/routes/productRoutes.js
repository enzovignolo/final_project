import { Router } from 'express';
const router = Router();
router.get('/', (req, res, next) => {
    res.status(200).json('todo');
});
router.post('/', (req, res, next) => {
    res.status(200).json('post');
});
router.get('/:id', (req, res, next) => {
    res.status(200).json('todo');
});
router.put('/:id', (req, res, next) => {
    res.status(200).json('todo');
});
router.delete('/:id', (req, res, next) => {
    res.status(200).json('todo');
});
export default router;
//# sourceMappingURL=productRoutes.js.map
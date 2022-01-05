const getAll = (req, res, next) => {
    return res.status(200).json('TODO');
};
const addOne = (req, res, next) => {
    return res.status(200).json('ADD ONE');
};
const getOne = (req, res, next) => {
    return res.status(200).json('GET ONE');
};
const updateOne = (req, res, next) => {
    return res.status(200).json('UPDATE ONE');
};
const deleteOne = (req, res, next) => {
    return res.status(200).json('DELETE ONE');
};
export default {
    getAll,
    getOne,
    addOne,
    updateOne,
    deleteOne,
};
//# sourceMappingURL=product.controllers.js.map
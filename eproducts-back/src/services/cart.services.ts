import { ICart } from "../interfaces/cart.interfaces";
import { Repositories } from "../interfaces/repository.interfaces";
import serviceFactory from "./serviceFactory";

export default ({cartRepository}:Repositories,{CartModel}) =>({
    getAll(){
        serviceFactory.getAll(cartRepository,CartModel)
    },
    getOne(id:string){
        serviceFactory.getOne(cartRepository,CartModel,id)
    },
    addOne(data:ICart){
        serviceFactory.addOne(cartRepository,CartModel,data)
    },
    updateOne(id:string,data:Partial<ICart>){
        serviceFactory.updateOneById(cartRepository,CartModel,id,data)
    },
    deleteOne(id:string){
        serviceFactory.deleteOne(cartRepository,CartModel,id)
    }

})
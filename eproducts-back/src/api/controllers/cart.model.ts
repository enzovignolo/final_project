import { NextFunction,Request,Response } from "express"
import controllerFactory from "./controllerFactory"

export default ({cartService})=>({
    getAll(req:Request,res:Response,next:NextFunction){
        controllerFactory.getAll(req,res,next,cartService);
    },
    getOne(req:Request,res:Response,next:NextFunction){
        controllerFactory.getOne(req,res,next,cartService);
    },
    addOne(req:Request,res:Response,next:NextFunction){
        controllerFactory.addOne(req,res,next,cartService)
    },
    updateOne(req:Request,res:Response,next:NextFunction){
        controllerFactory.updateOne(req,res,next,cartService);
    },
    deleteOne(req:Request,res:Response,next:NextFunction){
        controllerFactory.deleteOne(req,res,next,cartService);
    }
})
import {Response, Request, NextFunction} from "express";
import 'reflect-metadata';
import {RouterMethod} from '../routes/RouterMethod';
import {auth} from "../routes/auth";

import express from 'express';
var router = express.Router();

@auth
class AuthController {
    @methodDecorator('/login', RouterMethod.get)
    login(req: Request, res: Response, next: NextFunction){
        res.status(200).json({
            name: 'Minh',
            id: 12324
        })
    }

    @methodDecorator('/register', RouterMethod.post)
    register(req: Request, res: Response, next: NextFunction){
        //Validate the res.body properties

        //If it works well
        res.status(200).json({
            message: 'Sucessfully create a new account'
        })
    }
}

//@Desc: login controller with input of method and path
function methodDecorator(path: string, method: RouterMethod) {
    return function (target: any, propertyKey: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata(propertyKey, {path, method}, target, propertyKey);
    }
}

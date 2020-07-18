import express, {NextFunction, Request, RequestHandler, Response} from "express";
import 'reflect-metadata';
import {RouterMethod} from '../routes/RouterMethod';
import {auth, MethodInfo} from "../routes/auth";
import bodyValidator from "./utils/bodyValidator";

var router = express.Router();

@auth
class AuthController {
    @methodDecorator('', RouterMethod.use)
    use: string | undefined;

    @methodDecorator('/login', RouterMethod.get)
    login(req: Request, res: Response, next: NextFunction){
        res.status(200).json({
            name: 'Minh',
            id: 12324
        })
    }

    @methodDecorator('/register', RouterMethod.post, bodyValidator('email', 'name', 'password'))
    // @middleware(bodyValidator('email', 'name', 'password'))
    // @bodyValidator('email', 'name', 'password')
    register(req: Request, res: Response, next: NextFunction){
        const {email, password, name} = req.body;
        //Validate the res.body properties

        //If it works well
        res.status(200).json({
            message: 'Sucessfully create a new account'
        })
    }
}

//@Desc: login controller with input of method and path
function methodDecorator(path: string, method: RouterMethod, ...middlewares: RequestHandler[]) {
    return function (target: any, propertyKey: string, desc?: PropertyDescriptor) {
        const methodInfor: MethodInfo = {
            path,
            method,
            middlewares
        }
        Reflect.defineMetadata(propertyKey, methodInfor, target, propertyKey);
    }
}

function route(routePrefix: string) {
    return function (target: any, key: string) {
        Reflect.defineMetadata('route', routePrefix, target)
    }
}



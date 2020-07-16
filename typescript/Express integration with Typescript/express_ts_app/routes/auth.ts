import express, {NextFunction, RequestHandler} from 'express';

import {RouterMethod} from './RouterMethod'

export interface MethodInfo {
    path: string,
    method: RouterMethod,
    middlewares: RequestHandler[]
}

export var router = express.Router();

export function auth(target: any) {
    for (let methodKey in target.prototype){
        let methodInfo: MethodInfo = Reflect.getMetadata(methodKey, target.prototype, methodKey);
        // console.log(methodKey, methodInfo.middlewares[0]);
        router[methodInfo.method](methodInfo.path, ...methodInfo.middlewares, target.prototype[methodKey]);
    }
}
import express from 'express';

import {RouterMethod} from './RouterMethod'

interface MethodInfo {
    path: string,
    method: RouterMethod
}

export var router = express.Router();

export function auth(target: any) {
    for (let methodKey in target.prototype){
        let methodInfo: MethodInfo = Reflect.getMetadata(methodKey, target.prototype, methodKey);
        router[methodInfo.method](methodInfo.path, target.prototype[methodKey]);
    }
}
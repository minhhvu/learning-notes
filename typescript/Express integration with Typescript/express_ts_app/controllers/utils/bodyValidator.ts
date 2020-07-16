import {NextFunction, Request, Response} from "express";

export default function bodyValidator(...keys: string[]) {
    return function (req: Request, res: Response, next: NextFunction) {
        if (!req.body){
            res.status(422).json({error: 'Invalid request'});
            return;
        }

        for (let key of keys){
            if (!req.body[key]){
                res.status(422).json({error: 'Invalid request'});
                return;
            }

        }

        next()
    }
}
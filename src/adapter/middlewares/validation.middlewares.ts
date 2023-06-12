import { plainToClass } from "class-transformer"
import { validate } from "class-validator";
import { Response, Request, NextFunction } from 'express';


// const validationMiddlewares = <T extends object>(dtoClass: new () => T) => {
//     return (req: Request, res: Response, next: NextFunction) => {
//         const dto = plainToClass(dtoClass, req.body);
//         validate(dto).then(errors => {
//             if(errors.length > 0){
//                 const validatioErrors = errors.map(error => error.constraints);
//                 return res.status(400).json(validatioErrors);
//             }
//             req.dto = dto;
//             next();

//         })
//     }


// }


const validationMiddlewares = <T extends object>(dtoClass: new () => T) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const dto = plainToClass(dtoClass, req.body)
        const errors = await validate(dto)
        if (errors.length > 0) {
            const validationErrors = errors.map(error => error.constraints);
            return res.status(400).json(validationErrors)
        }
        next();
    }
}


export default validationMiddlewares
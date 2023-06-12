import { Request, Response } from 'express'
import { UserService } from '../../../domain/services/user.service';
import { UserEntity } from '../../../domain/entity/user.entity';

import { ResponseDto } from '../../../application/dtos/response/response.dto';


export class UserController {


    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }


    async getUsers(res: Response) {

        const user: UserEntity[] = await this.userService.getUserAll()

        // console.log(user);
        if (user.length != 0) {
            return res.status(200).json({
                code: 200,
                message: 'gestUsers from UserController!!!',
                user: user
            })
        };

        return res.status(400).json({
            code: 400,
            message: 'not Found Users'

        })
    }


    async postUser(req: Request, res: Response) {

        const userCreateDto: UserEntity = req.body;

        const user: ResponseDto<UserEntity> = await this.userService.postUser(userCreateDto)

        // console.log(user);

        return res.status(user.code).json({
            data: user
        })
    };


    async delUser(req: Request, res: Response) {
 
        const { id } = req.params;

        const parsedUserId: number = parseInt(id, 10);

        const user: ResponseDto<UserEntity> = await this.userService.delUser(parsedUserId);

        return res.status(user.code).json({
            data: user
        })


    }


    async putUser(req: Request, res: Response) {
 
        const { id } = req.params;

        const parsedUserId: number = parseInt(id, 10);

        const userUpdate = req.body;

        const user: ResponseDto<UserEntity> = await this.userService.putUser(parsedUserId, userUpdate);

        return res.status(user.code).json({
            data: user
        })


    }
}


        // validate(userCreateDto).then(errors => {
        //     if (errors.length > 0) {
        //         console.log(errors)
        //         return res.status(400).json({ errors })
        //     } else {
        //         return res.status(200).json({
        //             data: userCreateDto
        //         })
        //     }
        // })
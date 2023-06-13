import { PrismaClient } from "@prisma/client";
import { UserEntity } from "../../entity/user.entity";
import { ResponseDto } from "../../../application/dtos/response/response.dto";


export class AddUser{


    private prisma = new PrismaClient()


    async addUser(user: UserEntity): Promise<ResponseDto<UserEntity>> {

        let userEntity: UserEntity = new UserEntity();

        try {
            userEntity = await this.prisma.user.create({ data: user });
            const response = new ResponseDto(201, 'success', userEntity);
            return response;

        } catch (error: any) {
            // console.log('error', error.code);
            const response = new ResponseDto(400, error.message, userEntity);
            return response;
        }
    };
}
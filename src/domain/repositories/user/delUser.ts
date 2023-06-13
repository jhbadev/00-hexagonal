import { PrismaClient } from "@prisma/client";
import { UserEntity } from "../../entity/user.entity";
import { ResponseDto } from "../../../application/dtos/response/response.dto";


export class DelUser{


    private prisma = new PrismaClient()


    async delUser(userId: number): Promise<ResponseDto<UserEntity>> {

        let userEntity: UserEntity = new UserEntity();
        try {
            userEntity = await this.prisma.user.delete({
                where: { id: userId }
            })
            const response = new ResponseDto(201, `delete id ${userId}`, userEntity);
            return response;
        } catch (error: any) {
            const response = new ResponseDto(401, error.message, userEntity);
            return response;
        }
    };
}
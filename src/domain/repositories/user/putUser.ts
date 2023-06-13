import { PrismaClient } from "@prisma/client";
import { ResponseDto } from "../../../application/dtos/response/response.dto";
import { UserUpdateDto } from "../../../application/dtos/user/user.update.dto";
import { UserEntity } from "../../entity/user.entity";


export class PutUser {

    private prisma = new PrismaClient();

    async putUser(userId: number, userUpdateDto: UserUpdateDto): Promise<ResponseDto<UserEntity>> {

        let userEntity: UserEntity = new UserEntity();

        userEntity.lastname = userUpdateDto.lastname;
        userEntity.name = userUpdateDto.name;
        userEntity.rut = userUpdateDto.rut;

        try {

            userEntity = await this.prisma.user.update({
                where: { id: userId },
                data: userEntity
            });

            const response = new ResponseDto(200, `update id ${userId}`, userEntity);
            return response;

        } catch (error: any) {

            const response = new ResponseDto(401, error.message, userEntity);
            return response;

        }

    }

}
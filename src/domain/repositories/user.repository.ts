import { PrismaClient } from "@prisma/client";
import { UserEntity } from '../entity/user.entity';
import { UserCreateDto } from "../../application/dtos/user/user.create.dto";
import { ResponseDto } from "../../application/dtos/response/response.dto";
import { BodyResponseDto } from "../../application/dtos/response/body.response.dto";
import { IUserRepositoy } from "./iUser.Repository";
import { UserUpdateDto } from "../../application/dtos/user/user.update.dto";

export class UserRepository implements IUserRepositoy {

    private prisma = new PrismaClient();
    // constructor(private readonly prisma: PrismaClient) { }


    async getUser(): Promise<UserEntity[]> {
        const userEntity: UserEntity[] = await this.prisma.user.findMany();

        return userEntity;
    };

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


    };


}

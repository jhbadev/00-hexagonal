import { PrismaClient } from "@prisma/client";
import { UserEntity } from "../../entity/user.entity";


export class GetUser{

    private prisma = new PrismaClient();

    async getUser(): Promise<UserEntity[]> {
        const userEntity: UserEntity[] = await this.prisma.user.findMany();

        return userEntity;
    };

}
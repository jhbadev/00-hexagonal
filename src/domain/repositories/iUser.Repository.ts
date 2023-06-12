import { ResponseDto } from "../../application/dtos/response/response.dto";
import { UserUpdateDto } from "../../application/dtos/user/user.update.dto";
import { UserEntity } from "../entity/user.entity";


export interface IUserRepositoy{

    getUser(): Promise<UserEntity[]>;

    addUser(user: UserEntity): Promise<ResponseDto<UserEntity>>;

    delUser(userId: number): Promise<ResponseDto<UserEntity>>;

    putUser(userId: number, userUpdateDto: UserUpdateDto): Promise<ResponseDto<UserEntity>>;

}
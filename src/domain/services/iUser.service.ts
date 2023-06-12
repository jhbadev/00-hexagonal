import { ResponseDto } from "../../application/dtos/response/response.dto";
import { UserEntity } from "../entity/user.entity";
import { UserUpdateDto } from '../../application/dtos/user/user.update.dto';



export interface iUserService {

    getUserAll(): Promise<UserEntity[]>;

    postUser(user: UserEntity): Promise<ResponseDto<UserEntity>>;

    delUser(userId: number): Promise<ResponseDto<UserEntity>>;

    putUser(userId: number, userUpdateDto: UserUpdateDto): Promise<ResponseDto<UserEntity>>;
}
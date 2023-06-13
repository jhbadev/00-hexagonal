import { ResponseDto } from "../../../application/dtos/response/response.dto";
import { UserUpdateDto } from "../../../application/dtos/user/user.update.dto";
import { UserEntity } from "../../entity/user.entity";



export interface UserInterface {

 

    igetUser(): Promise<UserEntity[]>

    iaddUser(user: UserEntity): Promise<ResponseDto<UserEntity>>;

    idelUser(userId: number): Promise<ResponseDto<UserEntity>>;

    iputUser(userId: number, userUpdateDto: UserUpdateDto): Promise<ResponseDto<UserEntity>>

}
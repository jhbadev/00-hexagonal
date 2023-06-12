import { ResponseDto } from '../../application/dtos/response/response.dto';
import { UserEntity } from '../entity/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { iUserService } from './iUser.service';
import { UserUpdateDto } from '../../application/dtos/user/user.update.dto';



export class UserService implements iUserService {

    private userRepository = new UserRepository();


    getUserAll = async (): Promise<UserEntity[]> => {

        return await this.userRepository.getUser();
    };

    postUser = async (user: UserEntity): Promise<ResponseDto<UserEntity>> => {

        return await this.userRepository.addUser(user);
    };

    delUser = async (userId: number): Promise<ResponseDto<UserEntity>> => {

        return await this.userRepository.delUser(userId);
    };

    putUser = async (userId: number, userUpdateDto: UserUpdateDto): Promise<ResponseDto<UserEntity>> => {

        return await this.userRepository.putUser(userId, userUpdateDto);
    };


}
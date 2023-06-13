import { ResponseDto } from "../../../application/dtos/response/response.dto";
import { UserUpdateDto } from "../../../application/dtos/user/user.update.dto";
import { UserEntity } from "../../entity/user.entity";
import { UserInterface } from "./userInterfaces";
import { AddUser } from './addUser';
import { DelUser } from "./delUser";
import { GetUser } from "./getUser";
import { PutUser } from "./putUser";


export class UserClass implements UserInterface {

    private addUser: AddUser;

    private delUser: DelUser;

    private getUser: GetUser;

    private putUser: PutUser;

    constructor() {

        this.addUser = new AddUser();;
        this.delUser = new DelUser();
        this.getUser = new GetUser();
        this.putUser = new PutUser();
    }

    igetUser(): Promise<UserEntity[]> {

        const resp: Promise<UserEntity[]> = this.getUser.getUser();

        return resp;
    }
    iaddUser(user: UserEntity): Promise<ResponseDto<UserEntity>> {

        const resp: Promise<ResponseDto<UserEntity>> = this.addUser.addUser(user);

        return resp;
    }
    idelUser(userId: number): Promise<ResponseDto<UserEntity>> {

        const resp: Promise<ResponseDto<UserEntity>> = this.delUser.delUser(userId);
        return resp;
    }
    iputUser(userId: number, userUpdateDto: UserUpdateDto): Promise<ResponseDto<UserEntity>> {

        const resp: Promise<ResponseDto<UserEntity>> = this.putUser.putUser(userId, userUpdateDto);
        return resp;
    }



}
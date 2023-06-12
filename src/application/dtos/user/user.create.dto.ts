import { IsInt, IsString, Length } from "class-validator";

export class UserCreateDto {
    @IsInt()
    private id!: number;
    @IsString()
    private rut!: string;
    @IsString()
    private name!: string;
    @IsString()
    private lastname!: string;

 

    // constructor(id: number, rut: string, name: string, lastname: string) {

    //     this.id = id;
    //     this.rut = rut;
    //     this.name = name;
    //     this.lastname = lastname;



    // }
}


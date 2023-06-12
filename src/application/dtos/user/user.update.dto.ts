import { IsInt, IsOptional, IsString } from "class-validator";


export class UserUpdateDto {
    // @IsInt()
    // public id!: number;
    @IsString()
    @IsOptional()
    public rut!: string;
    @IsString()
    @IsOptional()
    public name!: string;
    @IsString()
    @IsOptional()
    public lastname!: string;

}
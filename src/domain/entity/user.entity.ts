import { user } from ".prisma/client";


export class UserEntity implements user {
  public   id!: number;
  public  rut!: string | null;
  public  name!: string;
  public  lastname!: string;
}
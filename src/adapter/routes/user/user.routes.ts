import { Router, response } from "express";
import { UserController } from "../../controllers/user/user.controller";
import { UserService } from "../../../domain/services/user.service";
import validationMiddlewares from "../../middlewares/validation.middlewares";
import { UserCreateDto } from "../../../application/dtos/user/user.create.dto";
import { UserUpdateDto } from "../../../application/dtos/user/user.update.dto";

 
import { UserInterface } from "../../../domain/repositories/user/userInterfaces";
import { UserClass } from "../../../domain/repositories/user/userClass";


const userInterface: UserInterface = new UserClass();
const userRouter = Router();

const userController = new UserController(userInterface);

userRouter.get('/', (req, res) => { userController.getUsers(res) });

userRouter.post('/', validationMiddlewares(UserCreateDto), (req, res) => {userController.postUser(req, res)})

userRouter.delete('/:id', (req, res) => {userController.delUser(req, res)});

userRouter.put('/:id', validationMiddlewares(UserUpdateDto), (req, res) => {userController.putUser(req, res)})

export default userRouter;
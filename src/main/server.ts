import bodyParser from "body-parser";
import express, { Application, Response, Request, Router } from "express";
import userRouter from "../adapter/routes/user/user.routes";


export class Server {

    private app: Application;
    private port: string;

    private userRouter: Router;

    constructor() {

        this.app = express();
        this.port = process.env.PORT || '3000';

        this.userRouter = userRouter;

        this.middlewares();

        this.healthCheck();

        this.routes();
    }


    healthCheck() {
        this.app.get('/healtchek', (req: Request, res: Response) => {
            res.send('Server is Healthy!')
        });
    };

    routes() {
        this.app.use('/user', this.userRouter)
    };

    middlewares() {
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({ extended: true }))
    };

    listening() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        });
    };
}
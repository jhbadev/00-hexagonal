
import * as dotenv from 'dotenv';
import { Server } from './main/server';


dotenv.config();

const server = new Server();

server.listening();
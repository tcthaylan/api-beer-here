import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { 
  AuthController,
  ProductController,
  AddressController,
  UserController,
  PubController,
  // ClientController,
} from './controllers'

const server = express()

server.use(cors())
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));

server.use('/auth', AuthController)
server.use('/product', ProductController)
server.use('/address', AddressController)
server.use('/user', UserController)
server.use('/pub', PubController)
// server.use('/client', ClientController)

server.listen(2000)
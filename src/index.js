import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { 
  ClientController,
  AuthController,
  PubController,
  ProductController
} from './controllers'

const server = express()

server.use(cors())
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));

server.use('/client', ClientController)
server.use('/auth', AuthController)
server.use('/pub', PubController)
server.use('/product', ProductController)

server.listen(2000)
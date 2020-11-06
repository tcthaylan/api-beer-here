import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import {
  AuthController,
  ProductController,
  UserAddressController,
  UserController,
  PubController,
  PubAddressController
  // ClientController,
} from './controllers'

const whitelist = [
  'http://localhost:3000',
  'http://192.168.1.8:3000',
  'http://192.168.1.8:2000',
];

const corsOptions = {
  credentials: true,
  optionsSuccessStatus: 200,
  origin: whitelist,
};

const server = express()

server.use(cors({ origin: true, credentials: true }))
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));

server.use('/auth', AuthController)
server.use('/product', ProductController)
server.use('/userAddress', UserAddressController)
server.use('/pubAddress', PubAddressController)
server.use('/user', UserController)
server.use('/pub', PubController)
// server.use('/client', ClientController)
// tes

server.listen(process.env.PORT || 3000);
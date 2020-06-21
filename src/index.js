import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { UserController } from './controllers'

const server = express()

server.use(cors())
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));

server.use('/user', UserController)

server.listen(2000)
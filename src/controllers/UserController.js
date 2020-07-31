import { Router } from 'express'
import { getUserById, getAllUsers } from '../functions/user/get'
import { createUser } from '../functions/user/create'
import { updateUser } from '../functions/user/update'
import { deleteUser } from '../functions/user/delete'

const router = Router()

router.get('/', (req, res) => {
  getAllUsers(req, res)
})

router.get('/:userId', (req, res) => {
  getUserById(req, res)
})

router.post('/', (req, res) => {
  createUser(req, res)
})

router.put('/:userId', (req, res) => {
  updateUser(req, res)
})

router.delete('/:userId', (req, res) => {
  deleteUser(req, res)
})

export const UserController = router
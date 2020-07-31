import { Router } from 'express'
import { getAllUserAdresses, getUserAddressById } from '../functions/userAddress/get'
import { createUserAddress } from '../functions/userAddress/create'
import { updateUserAddress } from '../functions/userAddress/update'
import { deleteUserAddress } from '../functions/userAddress/delete'

const router = Router()

router.get('/:userAddressId', (req, res) => {
  getUserAddressById(req, res)
})

router.get('/', (req, res) => {
  getAllUserAdresses(req, res)
})

router.post('/', (req, res) => {
  createUserAddress(req, res)
})

router.put('/:userAddressId', (req, res) => {
  updateUserAddress(req, res)
})

router.delete('/:userAddressId', (req, res) => {
  deleteUserAddress(req, res)
})

export const UserAddressController = router
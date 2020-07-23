import { Router } from 'express'
import { getAllAdresses, getAddressById } from '../functions/address/get'
import { createAddress } from '../functions/address/create'
import { updateAdress } from '../functions/address/update'
import { deleteAddress } from '../functions/address/delete'

const router = Router()

router.get('/:addressId', (req, res) => {
  getAddressById(req, res)
})

router.get('/', (req, res) => {
  getAllAdresses(req, res)
})

router.post('/', (req, res) => {
  createAddress(req, res)
})

router.put('/', (req, res) => {
  updateAdress(req, res)
})

router.delete('/', (req, res) => {
  deleteAddress(req, res)
})

export const AddressController = router
import { Router } from 'express'
import { getAllPubAdresses, getPubAddressById } from '../functions/pubAddress/get'
import { createPubAddress } from '../functions/pubAddress/create'
import { updatePubAddress } from '../functions/pubAddress/update'
import { deletePubAddress } from '../functions/pubAddress/delete'

const router = Router()

router.get('/:pubAddressId', (req, res) => {
  getPubAddressById(req, res)
})

router.get('/', (req, res) => {
  getAllPubAdresses(req, res)
})

router.post('/', (req, res) => {
  createPubAddress(req, res)
})

router.put('/:pubAddressId', (req, res) => {
  updatePubAddress(req, res)
})

router.delete('/:pubAddressId', (req, res) => {
  deletePubAddress(req, res)
})

export const PubAddressController = router
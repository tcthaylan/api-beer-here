import { Router } from 'express'
import { getClient, getAllClients } from '../functions/client/get'
import { createClient } from '../functions/client/create'
import { updateClient } from '../functions/client/update'
import { deleteClient } from '../functions/client/delete'

const router = Router()

router.get('/', (req, res) => {
  getAllClients(req, res)
})

router.get('/:clientId', (req, res) => {
  getClient(req, res)
})

router.post('/', (req, res) => {
  createClient(req, res)
})

router.put('/:clientId', (req, res) => {
  console.log('put')
  updateClient(req, res)
})

router.delete('/:clientId', (req, res) => {
  deleteClient(req, res)
})

export const ClientController = router
import { Router } from 'express'
import { getAllPubs, getPubById } from '../functions/pub/get'
import { createPub } from '../functions/pub/create'
import { updatePub } from '../functions/pub/update'
import { deletePub } from '../functions/pub/delete'

const router = Router()

router.get('/', (req, res) => {
  getAllPubs(req, res)
})

router.get('/:pubId', (req, res) => {
  getPubById(req, res)
})

router.post('/', (req, res) => {
  createPub(req, res)
})

router.put('/:pubId', (req, res) => {
  updatePub(req, res)
})

router.delete('/:pubId', (req, res) => {
  deletePub(req, res)
})

export const PubController = router
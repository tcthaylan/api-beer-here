import { Router } from 'express'
import { createPub } from '../functions/pub/create'

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello World')
})

router.post('/', (req, res) => {
  createPub(req, res)
})

export const PubController = router
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello World')
})

router.post('/', (req, res) => {
  res.send('Hello World')
})

export const PubController = router
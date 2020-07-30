import { Router } from 'express'
import { getAllProducts, getProductById } from '../functions/product/get'
import { createProduct } from '../functions/product/create'
import { updateProduct } from '../functions/product/update'
import { deleteProduct } from '../functions/product/delete'


const router = Router()

router.get('/', (req, res) => {
  getAllProducts(req, res)
})

router.get('/:productId', (req, res) => {
  getProductById(req, res)
})

router.post('/', (req, res) => {
  createProduct(req, res)
})

router.put('/:productId', (req, res) => {
  updateProduct(req, res)
})

router.delete('/:productId', (req, res) => {
  deleteProduct(req, res)
})


export const ProductController = router
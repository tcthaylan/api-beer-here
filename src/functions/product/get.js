import Product from '../../models/Product'

export const getAllProducts = async (req, res) => {
  const procuct = await Product.find()
  return res.send(procuct)
}

export const getProductById = async (req, res) => {
  const { productId } = req.params
  const product = await Product.findById(productId, (err) => {
    if (err) {
      return res.status(400).send({ error: 'Address not found' })
    }
  })

  return res.send(product)
}

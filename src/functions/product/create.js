import Product from '../../models/Product'

export const createProduct = async (req, res) => {
  const product = new Product(req.body)

  await product.save((err) => {
    if (err) {
      return res.status(400).send(err)
    }
    return res.send(product)
  })
}
import Product from '../../models/Product'

export const updateProduct = async (req, res) => {
  const { productId } = req.params
  const product = await Product.findByIdAndUpdate(productId, req.body, { new: true }, (error) => {
    if (error) {
      return res.status(400).send({ error })
    }
  })
  
  return res.send(product)
}
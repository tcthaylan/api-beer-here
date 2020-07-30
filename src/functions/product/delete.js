import Product from '../../models/Product'

export const deleteProduct = async (req, res) => {
  const { productId } = req.params

  await Product.findByIdAndDelete(productId, (error) => {
    if (error) {
      return res.status(400).send({ error })
    }

    return res.status(200).send()
  })
}

import Address from '../../models/Address'

export const updateAddress = async (req, res) => {
  const { addressId } = req.params
  const address = await Address.findByIdAndUpdate(addressId, req.body, (error) => {
    if (error) {
      return res.status(400).send({ error })
    }
  })

  return res.send(address)
}
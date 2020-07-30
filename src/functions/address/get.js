import Address from '../../models/Address'

export const getAllAdresses = async (req, res) => {
  const address = await Address.find()
  return res.send(address)
}

export const getAddressById = async (req, res) => {
  const { addressId } = req.params
  const address = await Address.findById(addressId, (err) => {
    if (err) {
      return res.status(400).send({ error: 'Address not found' })
    }
  })

  return res.send(address)
}
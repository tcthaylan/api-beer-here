import Address from '../../models/Address'

export const createAddress = async (req, res) => {
  const address = new Address(req.body)
  await address.save((err) => {
    if (err) {
      return res.status(400).send(err)
    }
    return res.send(address)
  })
}
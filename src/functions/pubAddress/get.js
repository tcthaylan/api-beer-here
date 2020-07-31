import PubAddress from '../../models/PubAddress'

export const getAllPubAdresses = async (req, res) => {
  const pubAddress = await PubAddress.find()
  return res.send(pubAddress)
}

export const getPubAddressById = async (req, res) => {
  const { pubAddressId } = req.params
  const pubAddress = await PubAddress.findById(pubAddressId, (err) => {
    if (err) {
      return res.status(400).send({ error: 'Pub Address not found' })
    }
  })

  return res.send(pubAddress)
}
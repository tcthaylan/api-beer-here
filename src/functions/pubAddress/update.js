import PubAddress from '../../models/PubAddress'

export const updatePubAddress = async (req, res) => {
  const { pubAddressId } = req.params
  const pubAddress = await PubAddress.findByIdAndUpdate(pubAddressId, req.body, (error) => {
    if (error) {
      return res.status(400).send({ error })
    }
  })

  return res.send(pubAddress)
}
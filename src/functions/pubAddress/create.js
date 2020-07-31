import PubAddress from '../../models/PubAddress'

export const createPubAddress = async (req, res) => {
  const pubAddress = new PubAddress(req.body)
  await pubAddress.save((err) => {
    if (err) {
      return res.status(400).send(err)
    }
    return res.send(pubAddress)
  })
}
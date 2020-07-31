import PubAddress from '../../models/PubAddress'

export const deletePubAddress = async (req, res) => {
  const { pubAddressId } = req.params

  await PubAddress.findByIdAndDelete(pubAddressId, (error) => {
    if (error) {
      return res.status(400).send({ error })
    }

    return res.status(200).send()
  })
}
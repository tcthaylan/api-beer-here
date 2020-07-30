import Address from '../../models/Address'

export const deleteAddress = async (req, res) => {
  const { addressId } = req.params

  await Address.findByIdAndDelete(addressId, (error) => {
    if (error) {
      return res.status(400).send({ error })
    }

    return res.status(200).send()
  })
}
import UserAddress from '../../models/UserAddress'

export const deleteUserAddress = async (req, res) => {
  const { userAddressId } = req.params

  await UserAddress.findByIdAndDelete(userAddressId, (error) => {
    if (error) {
      return res.status(400).send({ error })
    }

    return res.status(200).send()
  })
}
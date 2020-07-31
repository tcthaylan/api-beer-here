import UserAddress from '../../models/UserAddress'

export const updateUserAddress = async (req, res) => {
  const { userAddressId } = req.params
  const userAddress = await UserAddress.findByIdAndUpdate(userAddressId, req.body, (error) => {
    if (error) {
      return res.status(400).send({ error })
    }
  })

  return res.send(userAddress)
}
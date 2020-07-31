import UserAddress from '../../models/UserAddress'

export const getAllUserAdresses = async (req, res) => {
  const userAddress = await UserAddress.find()
  return res.send(userAddress)
}

export const getUserAddressById = async (req, res) => {
  const { userAddressId } = req.params
  const userAddress = await UserAddress.findById(userAddressId, (err) => {
    if (err) {
      return res.status(400).send({ error: 'User Address not found' })
    }
  })

  return res.send(userAddress)
}
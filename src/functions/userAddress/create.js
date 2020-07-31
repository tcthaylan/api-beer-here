import UserAddress from '../../models/UserAddress'

export const createUserAddress = async (req, res) => {
  const userAddress = new UserAddress(req.body)
  await userAddress.save((err) => {
    if (err) {
      return res.status(400).send(err)
    }
    return res.send(userAddress)
  })
}
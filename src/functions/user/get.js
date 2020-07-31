import User from '../../models/User'

export const getAllUsers = async (req, res) => {
  const users = await User.find()
  return res.send(users)
}

export const getUserById = async (req, res) => {
  const { userId } = req.params
  const user = await User.findById(userId, (err) => {
    if (err) {
      return res.status(400).send({ error: 'User not found' })
    }
  })

  return res.send(user)
}
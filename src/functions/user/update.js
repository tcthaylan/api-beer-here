import User from '../../models/User'

export const updateUser = async (req, res) => {
  const { userId } = req.params
  const { name } = req.body
  const user = await User.findByIdAndUpdate(userId, { name }, { new: true }, (error) => {
    if (error) {
      return res.status(400).send({ error })
    }
  })
  return res.send(user)
}

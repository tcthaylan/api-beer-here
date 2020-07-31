import User from '../../models/User'

export const deleteUser = async (req, res) => {
  const { userId } = req.params

  await User.findByIdAndDelete(userId, (error) => {
    if (error) {
      return res.status(400).send({ error })
    }

    return res.status(200).send()
  })
}

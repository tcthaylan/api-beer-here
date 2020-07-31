import User from '../../models/User'
import validateEmail from '../../utils/validadeEmail'
import validatePhoneNumber from '../../utils/validadePhoneNumber'

export const createUser = async (req, res) => {
  const { email, phoneNumber } = req.body

  const emailExists = await User.findOne({ email })
  if (emailExists) {
    return res.status(400).send({ error: 'Este email já existe, utilize outro' })
  }

  if (!validateEmail(email)) {
    return res.status(400).send({ error: 'Email inválido, digite um formato válido' })
  }

  if (!validatePhoneNumber(phoneNumber)) {
    return res.status(400).send({ error: 'Número inválido, digite um formato válido' })
  }

  const user = new User(req.body)
  await user.save((err) => {
    if (err) {
      return res.status(400).send(err)
    }
    return res.send(user)
  })
} 
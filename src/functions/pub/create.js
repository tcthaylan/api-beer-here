import Pub from '../../models/Pub'
import Client from '../../models/Client'
import validateEmail from '../../utils/validadeEmail'

export const createPub = async (req, res) => {
  const { email, password } = req.body

  if (!validateEmail(email)) {
    return res.status(400).send({ error: 'Email inválido, digite um formato válido' })
  }

  const pubEmailExists = await Pub.findOne({ email })
  if (pubEmailExists) {
    return res.status(400).send({ error: 'Este email já existe, utilize outro' })
  }

  const clientEmailExists = await Client.findOne({ email })
  if (clientEmailExists) {
    return res.status(400).send({ error: 'Este email já existe, utilize outro' })
  }

  const pub = new Pub(req.body)
  await pub.save((err) => {
    if (err) {
      return res.status(400).send(err)
    }
    return res.send(pub)
  })
} 
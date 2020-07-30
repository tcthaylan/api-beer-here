import Client from '../../models/Client'
import Pub from '../../models/Pub'
import validateEmail from '../../utils/validadeEmail'

export const createClient = async (req, res) => {
  const { email } = req.body

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

  const client = new Client(req.body)
  await client.save((err) => {
    if (err) {
      return res.status(400).send(err)
    }
    return res.send(client)
  })
} 
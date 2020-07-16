import Client from '../../models/Client'
import validateEmail from '../../utils/validadeEmail'

export const createClient = async (req, res) => {
  const { email } = req.body

  if (!validateEmail(email)) {
    return res.status(400).send({ error: 'Email inválido, digite um formato válido' })
  }

  const emailExists = await Client.findOne({ email })
  if (emailExists) {
    return res.status(400).send({ error: 'Este email já existe, utilize outro' })
  }
  
  // cadastrar endereco
  // facebook e google

  const client = new Client(req.body)
  await client.save((err) => {
    if (err) {
      return res.status(400).send(err)
    }
    return res.send(client)
  })
} 
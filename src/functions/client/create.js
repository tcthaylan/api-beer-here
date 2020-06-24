import Client from '../../models/Client'

export const createClient = async (req, res) => {
  const { email, password } = req.body

  const emailExists = await Client.findOne({ email })
  if (emailExists) {
    return res.status(400).send({ error: 'Este email já existe, utilize outro' })
  }

  //validar email

  const client = new Client(req.body)
  await client.save((err) => {
    if (err) {
      return res.status(400).send(err)
    }
    return res.send(client)
  })
} 
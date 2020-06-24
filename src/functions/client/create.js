import Client from '../../models/Client'

export const createClient = async (req, res) => {
  const { email } = req.body

  await Client.findOne({ email }, (err) => {
    if (err) {
      return res.status(400).send({ error: 'Este email já existe, utilize outro' })
    }
  })

  const client = new Client(req.body)
  await client.save((err) => {
    if (err) {
      return res.status(400).send(err)
    }
  })

  return res.send(client)
} 
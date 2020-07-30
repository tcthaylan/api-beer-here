import Client from '../../models/Client'

export const getAllClients = async (req, res) => {
  const clients = await Client.find()
  return res.send(clients)
}

export const getClient = async (req, res) => {
  const { clientId } = req.params
  const client = await Client.findById(clientId, (err) => {
    if (err) {
      return res.status(400).send({ error: 'Client não encontrado' })
    }
  })

  return res.send(client)
}
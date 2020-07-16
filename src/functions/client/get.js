import Client from '../../models/Client'

export const getAllClients = async (req, res) => {
  const clients = await Client.find().select('-password')
  return res.send(clients)
}

export const getClient = async (req, res) => {
  const { clientId } = req.params
  const client = await Client.findById(clientId, (err) => {
    if (err) {
      return res.status(400).send({ error: 'Client não encontrado' })
    }
  }).select('-password')

  return res.send(client)
}
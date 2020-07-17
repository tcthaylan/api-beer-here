import Client from '../../models/Client'

export const updateClient = async (req, res) => {
  const { clientId } = req.params
  const { name } = req.body
  const client = await Client.findByIdAndUpdate(clientId, { name }, (error) => {
    if (error) {
      return res.status(400).send({ error })
    }
  })

  return res.send(client)
}
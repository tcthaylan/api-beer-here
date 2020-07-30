import Client from '../../models/Client'

export const deleteClient = async (req, res) => {
  const { clientId } = req.params

  await Client.findByIdAndDelete(clientId, (error) => {
    if (error) {
      return res.status(400).send({ error })
    }

    return res.status(200).send()
  })
}
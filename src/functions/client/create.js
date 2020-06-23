import Client from '../../models/Client'

export const createClient = async (req, res) => {
  const { email } = req.body

  // await Client.find({ email }, (err) => {
  //   if (err) {
  //     console.log(err)
  //   }
  // })

  const client = await new Client(req.body)
  await client.save()

  res.send(req.body)
} 
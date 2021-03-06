import Pub from '../../models/Pub'

export const getAllPubs = async (req, res) => {
  const pubs = await Pub.find()
  return res.send(pubs)
}

export const getPubById = async (req, res) => {
  const { pubId } = req.params
  const pub = await Pub.findById(pubId, (err) => {
    if (err) {
      return res.status(400).send({ error: 'Pub not found' })
    }
  })

  return res.send(pub)
}
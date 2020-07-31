import Pub from '../../models/Pub'

export const createPub = async (req, res) => {
  const pub = new Pub(req.body)
  await pub.save((err) => {
    if (err) {
      return res.status(400).send(err)
    }
    return res.send(pub)
  })
} 
import Pub from '../../models/Pub'

export const updatePub = async (req, res) => {
  const { pubId } = req.params
  const { name } = req.body
  const pub = await Pub.findByIdAndUpdate(pubId, { name }, { new: true }, (error) => {
    if (error) {
      return res.status(400).send({ error })
    }
  })
  return res.send(pub)
}

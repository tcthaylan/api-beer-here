import Pub from '../../models/Pub'

export const deletePub = async (req, res) => {
  const { pubId } = req.params

  await Pub.findByIdAndDelete(pubId, (error) => {
    if (error) {
      return res.status(400).send({ error })
    }

    return res.status(200).send()
  })
}

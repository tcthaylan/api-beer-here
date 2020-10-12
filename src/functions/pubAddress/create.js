import PubAddress from '../../models/PubAddress'
import apiMaps from '../../services/apiMaps'

export const createPubAddress = async (req, res) => {
  const { number, street, city, state } = req.body
  const formatedAddress = `${number}+${street},+${city},+${state}`.normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim().replace(/ /g, '%20')

  apiMaps.get(`/geocode/json?address=${formatedAddress}&key=${process.env.API_MAPS}`)
    .then(async resp => {
      const { lat, lng } = resp.data.results[0].geometry.location;
      console.log({ ...req.body, lat, lng })
      const pubAddress = new PubAddress({ ...req.body, lat, lng })
      await pubAddress.save((err) => {
        if (err) {
          return res.status(400).send(err)
        }
        return res.send(pubAddress)
      })
    })
    .catch(error => {

      return res.status(400).send({ error: error.message })
    })
}
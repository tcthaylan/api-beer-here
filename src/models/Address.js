import { Schema, model } from '../database/index'

const schemaOptions = {
  timestamps: true
}

const AddressSchema = new Schema({
  street: String,
  number: Number,
  city: String,
  state: String,
  zipCode: String,
}, schemaOptions)

const Address = model('Address', AddressSchema)
export default Address
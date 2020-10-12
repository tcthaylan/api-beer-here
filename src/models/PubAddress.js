import { Schema, model } from '../database/index'

const schemaOptions = {
  timestamps: true
}

const PubAddressSchema = new Schema({
  street: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  pub: {
    type: Schema.Types.ObjectId,
    ref: 'Pub'
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  }
}, schemaOptions)

const PubAddress = model('PubAddress', PubAddressSchema)
export default PubAddress
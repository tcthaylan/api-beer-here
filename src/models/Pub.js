import { Schema, model } from '../database/index'

const schemaOptions = {
  timestamps: true
}

const PubSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: 'PubAddress'
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
  // avalição
  // comentarios
}, schemaOptions)

const Pub = model('Pub', PubSchema)
export default Pub
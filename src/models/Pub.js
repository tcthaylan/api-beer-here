import { Schema, model } from '../database/index'

const schemaOptions = {
  timestamps: true
}

const PubSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  // phoneNumber: {
  //   type: String,
  //   required: true
  // },
  address: {
    type: Schema.Types.ObjectId,
    ref: 'Address'
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
  // google and facebook
  // avalição
  // comentarios
}, schemaOptions)

const Pub = model('Pub', PubSchema)
export default Pub
import { Schema, model } from '../database/index'
import bcrypt from 'bcryptjs'

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

PubSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
})

const Pub = model('Pub', PubSchema)
export default Pub
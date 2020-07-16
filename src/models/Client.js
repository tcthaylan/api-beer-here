import { Schema, model } from '../database/index'
import bcrypt from 'bcryptjs'

const schemaOptions = {
  timestamps: true
}

const ClientSchema = new Schema({
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
    required: true
  },
  // phoneNumber: {
  //   type: String,
  // },
  // address: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Address'
  // }
  // google and facebook
}, schemaOptions)

ClientSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
})

const Client = model('Client', ClientSchema)
export default Client
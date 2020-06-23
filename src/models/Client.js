import { Schema, model } from '../database/index'

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
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: 'Address'
  }
  // google and facebook
}, schemaOptions)

export const Client = model('Client', ClientSchema)
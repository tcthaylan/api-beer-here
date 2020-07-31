import { Schema, model } from '../database/index'

const schemaOptions = {
  timestamps: true
}

const UserAddressSchema = new Schema({
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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, schemaOptions)

const UserAddress = model('UserAddress', UserAddressSchema)
export default UserAddress
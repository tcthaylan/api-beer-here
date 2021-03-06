import { Schema, model } from '../database/index'
import bcrypt from 'bcryptjs'

const schemaOptions = {
  timestamps: true
}

const UserSchema = new Schema({
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
  provider: {
    type: Boolean,
    required: true,
    default: false
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: 'UserAddress',
  },
  pubs: [{
    type: Schema.Types.ObjectId,
    ref: 'Pub'
  }],
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
  // google and facebook
}, schemaOptions)

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
})

const Pub = model('User', UserSchema)
export default Pub
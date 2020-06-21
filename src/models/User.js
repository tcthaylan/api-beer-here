import { Schema, model } from '../config/database'

const UserSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  age: Number
})

const User = model('User', UserSchema)

export default User
import { Schema, model } from '../database/index'

const schemaOptions = {
  timestamps: true
}

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
  image: String
}, schemaOptions)

const Category = model('Category', CategorySchema)
export default Category
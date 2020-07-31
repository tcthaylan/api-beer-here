import { Schema, model } from '../database/index'

const schemaOptions = {
  timestamps: true
}

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  pubs: [{
    type: Schema.Types.ObjectId,
    ref: 'Pub'
  }]
  // image: String,
  // price: Number,
  // avalição
  // comentarios
  // categorias
}, schemaOptions)

const Product = model('Product', ProductSchema)
export default Product
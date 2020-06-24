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
  price: Number,
  // avalição
  // comentarios
  // categorias
}, schemaOptions)

const Product = model('Product', ProductSchema)
export default Product
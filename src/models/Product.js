import { Schema, model } from '../database/index'

const schemaOptions = {
  timestamps: true
}

const ProductSchema = new Schema({
  id: Schema.Types.ObjectId,
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

export const Product = model('Product', ProductSchema)
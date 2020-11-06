"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../database/index");

const schemaOptions = {
  timestamps: true
};
const CategorySchema = new _index.Schema({
  name: {
    type: String,
    required: true
  },
  products: [{
    type: _index.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  image: String
}, schemaOptions);
const Category = (0, _index.model)('Category', CategorySchema);
var _default = Category;
exports.default = _default;
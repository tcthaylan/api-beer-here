"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../database/index");

const schemaOptions = {
  timestamps: true
};
const UserAddressSchema = new _index.Schema({
  street: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  user: {
    type: _index.Schema.Types.ObjectId,
    ref: 'User'
  }
}, schemaOptions);
const UserAddress = (0, _index.model)('UserAddress', UserAddressSchema);
var _default = UserAddress;
exports.default = _default;
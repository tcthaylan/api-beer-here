"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../database/index");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schemaOptions = {
  timestamps: true
};
const UserSchema = new _index.Schema({
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
    select: false
  },
  provider: {
    type: Boolean,
    required: true,
    default: false
  },
  phoneNumber: {
    type: String // required: true

  },
  address: {
    type: _index.Schema.Types.ObjectId,
    ref: 'UserAddress'
  },
  pubs: [{
    type: _index.Schema.Types.ObjectId,
    ref: 'Pub'
  }],
  products: [{
    type: _index.Schema.Types.ObjectId,
    ref: 'Product'
  }]
}, schemaOptions);
UserSchema.pre('save', async function (next) {
  const hash = await _bcryptjs.default.hash(this.password, 10);
  this.password = hash;
  next();
});
const Pub = (0, _index.model)('User', UserSchema);
var _default = Pub;
exports.default = _default;
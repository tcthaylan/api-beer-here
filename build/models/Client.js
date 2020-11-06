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
const ClientSchema = new _index.Schema({
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
  } // phoneNumber: {
  //   type: String,
  // },
  // address: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Address'
  // }
  // google and facebook

}, schemaOptions);
ClientSchema.pre('save', async function (next) {
  const hash = await _bcryptjs.default.hash(this.password, 10);
  this.password = hash;
  next();
});
const Client = (0, _index.model)('Client', ClientSchema);
var _default = Client;
exports.default = _default;
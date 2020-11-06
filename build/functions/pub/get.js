"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPubById = exports.getAllPubs = void 0;

var _Pub = _interopRequireDefault(require("../../models/Pub"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllPubs = async (req, res) => {
  const pubs = await _Pub.default.find().populate('address');
  return res.send(pubs);
};

exports.getAllPubs = getAllPubs;

const getPubById = async (req, res) => {
  const {
    pubId
  } = req.params;
  const pub = await _Pub.default.findById(pubId, err => {
    if (err) {
      return res.status(400).send({
        error: 'Pub not found'
      });
    }
  }).populate('address');
  return res.send(pub);
};

exports.getPubById = getPubById;
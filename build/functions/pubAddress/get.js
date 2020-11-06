"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPubAddressById = exports.getAllPubAdresses = void 0;

var _PubAddress = _interopRequireDefault(require("../../models/PubAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllPubAdresses = async (req, res) => {
  const pubAddress = await _PubAddress.default.find();
  return res.send(pubAddress);
};

exports.getAllPubAdresses = getAllPubAdresses;

const getPubAddressById = async (req, res) => {
  const {
    pubAddressId
  } = req.params;
  const pubAddress = await _PubAddress.default.findById(pubAddressId, err => {
    if (err) {
      return res.status(400).send({
        error: 'Pub Address not found'
      });
    }
  });
  return res.send(pubAddress);
};

exports.getPubAddressById = getPubAddressById;
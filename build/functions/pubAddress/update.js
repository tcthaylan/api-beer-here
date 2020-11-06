"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePubAddress = void 0;

var _PubAddress = _interopRequireDefault(require("../../models/PubAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const updatePubAddress = async (req, res) => {
  const {
    pubAddressId
  } = req.params;
  const pubAddress = await _PubAddress.default.findByIdAndUpdate(pubAddressId, req.body, error => {
    if (error) {
      return res.status(400).send({
        error
      });
    }
  });
  return res.send(pubAddress);
};

exports.updatePubAddress = updatePubAddress;
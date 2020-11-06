"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePubAddress = void 0;

var _PubAddress = _interopRequireDefault(require("../../models/PubAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const deletePubAddress = async (req, res) => {
  const {
    pubAddressId
  } = req.params;
  await _PubAddress.default.findByIdAndDelete(pubAddressId, error => {
    if (error) {
      return res.status(400).send({
        error
      });
    }

    return res.status(200).send();
  });
};

exports.deletePubAddress = deletePubAddress;
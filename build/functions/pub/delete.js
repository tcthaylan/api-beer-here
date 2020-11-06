"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePub = void 0;

var _Pub = _interopRequireDefault(require("../../models/Pub"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const deletePub = async (req, res) => {
  const {
    pubId
  } = req.params;
  await _Pub.default.findByIdAndDelete(pubId, error => {
    if (error) {
      return res.status(400).send({
        error
      });
    }

    return res.status(200).send();
  });
};

exports.deletePub = deletePub;
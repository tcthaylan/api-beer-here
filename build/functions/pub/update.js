"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePub = void 0;

var _Pub = _interopRequireDefault(require("../../models/Pub"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const updatePub = async (req, res) => {
  const {
    pubId
  } = req.params;
  const {
    name
  } = req.body;
  const pub = await _Pub.default.findByIdAndUpdate(pubId, {
    name
  }, {
    new: true
  }, error => {
    if (error) {
      return res.status(400).send({
        error
      });
    }
  });
  return res.send(pub);
};

exports.updatePub = updatePub;
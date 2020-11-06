"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPub = void 0;

var _Pub = _interopRequireDefault(require("../../models/Pub"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createPub = async (req, res) => {
  const pub = new _Pub.default(req.body);
  await pub.save(err => {
    if (err) {
      return res.status(400).send(err);
    }

    return res.send(pub);
  });
};

exports.createPub = createPub;
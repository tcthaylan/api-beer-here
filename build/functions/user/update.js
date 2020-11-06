"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = void 0;

var _User = _interopRequireDefault(require("../../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const updateUser = async (req, res) => {
  const {
    userId
  } = req.params;
  const {
    name
  } = req.body;
  const user = await _User.default.findByIdAndUpdate(userId, {
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
  return res.send(user);
};

exports.updateUser = updateUser;
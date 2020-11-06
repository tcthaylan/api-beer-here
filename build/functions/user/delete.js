"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = void 0;

var _User = _interopRequireDefault(require("../../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const deleteUser = async (req, res) => {
  const {
    userId
  } = req.params;
  await _User.default.findByIdAndDelete(userId, error => {
    if (error) {
      return res.status(400).send({
        error
      });
    }

    return res.status(200).send();
  });
};

exports.deleteUser = deleteUser;
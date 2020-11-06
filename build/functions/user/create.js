"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = void 0;

var _User = _interopRequireDefault(require("../../models/User"));

var _validadeEmail = _interopRequireDefault(require("../../utils/validadeEmail"));

var _validadePhoneNumber = _interopRequireDefault(require("../../utils/validadePhoneNumber"));

var _tokenJwt = require("../../utils/tokenJwt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createUser = async (req, res) => {
  const {
    email,
    phoneNumber
  } = req.body;
  const emailExists = await _User.default.findOne({
    email
  });

  if (emailExists) {
    return res.status(400).send({
      error: 'Este email já existe, utilize outro'
    });
  }

  if (!(0, _validadeEmail.default)(email)) {
    return res.status(400).send({
      error: 'Email inválido, digite um formato válido'
    });
  } // if (!validatePhoneNumber(phoneNumber)) {
  //   return res.status(400).send({ error: 'Número inválido, digite um formato válido' })
  // }


  const user = new _User.default(req.body);
  await user.save(err => {
    if (err) {
      return res.status(400).send(err);
    }

    const permission = user.provider ? 'pub' : 'client';
    const token = (0, _tokenJwt.generateToken)({
      id: user._id,
      permission
    });
    return res.send({
      user,
      token
    });
  });
};

exports.createUser = createUser;
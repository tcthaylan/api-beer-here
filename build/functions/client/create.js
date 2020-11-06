"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClient = void 0;

var _Client = _interopRequireDefault(require("../../models/Client"));

var _Pub = _interopRequireDefault(require("../../models/Pub"));

var _validadeEmail = _interopRequireDefault(require("../../utils/validadeEmail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createClient = async (req, res) => {
  const {
    email
  } = req.body;

  if (!(0, _validadeEmail.default)(email)) {
    return res.status(400).send({
      error: 'Email inválido, digite um formato válido'
    });
  }

  const pubEmailExists = await _Pub.default.findOne({
    email
  });

  if (pubEmailExists) {
    return res.status(400).send({
      error: 'Este email já existe, utilize outro'
    });
  }

  const clientEmailExists = await _Client.default.findOne({
    email
  });

  if (clientEmailExists) {
    return res.status(400).send({
      error: 'Este email já existe, utilize outro'
    });
  }

  const client = new _Client.default(req.body);
  await client.save(err => {
    if (err) {
      return res.status(400).send(err);
    }

    return res.send(client);
  });
};

exports.createClient = createClient;
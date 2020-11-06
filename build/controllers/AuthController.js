"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthController = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _express = require("express");

var _User = _interopRequireDefault(require("../models/User"));

var _tokenJwt = require("../utils/tokenJwt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/login', async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;
    const user = await _User.default.findOne({
      email
    }).select('+password');

    if (!user) {
      return res.status(400).send({
        error: 'Email e/ou senha incorreto(s)'
      });
    }

    if (!(await _bcryptjs.default.compare(password, user.password))) {
      return res.status(400).send({
        error: 'Email e/ou senha incorreto(s)'
      });
    }

    const permission = user.provider ? 'pub' : 'client';
    const token = (0, _tokenJwt.generateToken)({
      id: user._id,
      permission
    });
    delete user.password;
    return res.json({
      user,
      token
    });
  } catch (error) {
    return res.status(400).send({
      error
    });
  }
}); // router.get('/logout', (req, res) => {
// console.log(req.cookies[process.env.COOKIE_LOGIN])
// res.clearCookie('h8o9fsk8691fad');
// return res.status(200).send({ loggout: true });
// })

const AuthController = router;
exports.AuthController = AuthController;
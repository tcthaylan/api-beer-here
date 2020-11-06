"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function auth(permissions) {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).send({
      error: 'No token provided'
    });
    const parts = authHeader.split(' ');
    if (parts.length !== 2) return res.status(401).send({
      error: 'Token error'
    });
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) return res.status(401).send({
      error: 'Token malformatted'
    });

    _jsonwebtoken.default.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) return res.status(401).send({
        error: 'token invalid'
      });

      if (!permissions.includes(decoded.permission)) {
        return res.status(400).send({
          error: 'permission denied'
        });
      }

      res.user_id = decoded.id;
      res.user_permission = user.permission;
      return next();
    });
  };
}

var _default = auth;
exports.default = _default;
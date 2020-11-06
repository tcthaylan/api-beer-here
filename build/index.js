"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _controllers = require("./controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const whitelist = ['http://localhost:3000', 'http://192.168.1.8:3000', 'http://192.168.1.8:2000'];
const corsOptions = {
  credentials: true,
  optionsSuccessStatus: 200,
  origin: whitelist
};
const server = (0, _express.default)();
server.use((0, _cors.default)({
  origin: true,
  credentials: true
}));
server.use(_bodyParser.default.json());
server.use(_express.default.urlencoded({
  extended: true
}));
server.use('/auth', _controllers.AuthController);
server.use('/product', _controllers.ProductController);
server.use('/userAddress', _controllers.UserAddressController);
server.use('/pubAddress', _controllers.PubAddressController);
server.use('/user', _controllers.UserController);
server.use('/pub', _controllers.PubController); // server.use('/client', ClientController)
// tes

server.listen(3000);
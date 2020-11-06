"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PubController = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _multer2 = _interopRequireDefault(require("../config/multer"));

var _express = require("express");

var _get = require("../functions/pub/get");

var _create = require("../functions/pub/create");

var _update = require("../functions/pub/update");

var _delete = require("../functions/pub/delete");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/uploadImage', (0, _multer.default)(_multer2.default).single("file"), (req, res) => {
  const {
    file
  } = req;
  delete file.bucket;
  delete file.acl;
  delete file.storageClass;
  delete file.serverSideEncryption;
  delete file.metadata;
  delete file.encoding;
  delete file.etag;
  res.send(file);
});
router.get('/', (req, res) => {
  (0, _get.getAllPubs)(req, res);
});
router.get('/:pubId', (req, res) => {
  (0, _get.getPubById)(req, res);
});
router.post('/', (req, res) => {
  (0, _create.createPub)(req, res);
});
router.put('/:pubId', (req, res) => {
  (0, _update.updatePub)(req, res);
});
router.delete('/:pubId', (req, res) => {
  (0, _delete.deletePub)(req, res);
});
const PubController = router;
exports.PubController = PubController;
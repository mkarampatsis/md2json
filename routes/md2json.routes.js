const express = require('express');
const router = express.Router();

const md2jsonController = require('../controllers/md2json.controller');

router.get('/importall', md2jsonController.getAllFiles);
router.get('/importone/:filename', md2jsonController.getOneFile);

module.exports = router;
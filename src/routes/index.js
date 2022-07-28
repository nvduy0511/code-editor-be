const express = require('express');
const router = express.Router();
const compileCodeRoute = require('./compile-code.route');

router.use('/compile-code', compileCodeRoute);

module.exports = router;

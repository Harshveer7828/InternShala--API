const express = require('express');
const { homePage } = require('../controllers/controller');
const router = express.Router();

router.get('/',homePage)

module.exports = router;
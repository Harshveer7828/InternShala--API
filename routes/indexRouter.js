const express = require('express');
const { homePage,studentSignUp } = require('../controllers/controller');
const router = express.Router();

router.get('/', homePage)

router.post('/student/signup',studentSignUp)

module.exports = router;
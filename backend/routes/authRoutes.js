const express = require('express')
const router = express.Router()

const { getRegister,postLogin,postRegister } = require('../controllers/authController');


router.get('/register',getRegister)
router.post('/register',postRegister);
router.post("/login", postLogin);

module.exports = router;
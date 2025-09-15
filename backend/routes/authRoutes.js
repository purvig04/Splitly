const express = require('express')
const router = express.Router()
const { requireAuth } = require("../middleware/authMiddleware");

const { getRegister,postLogin,postRegister, getHome } = require('../controllers/authController');


router.get('/register',getRegister)
router.post('/register',postRegister);
router.post("/login", postLogin);
router.get('/home',requireAuth,getHome)

module.exports = router;
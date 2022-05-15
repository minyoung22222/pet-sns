const express = require('express');
const router = express.Router();

// /auth/login 에 접근해야함
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
})

module.exports = router;
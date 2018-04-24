const router = require('express').Router();

const { authVerifier } = require('./auth/auth_verifier');

router.use('/user', authVerifier, require('./user'));
router.use('/auth', require('./auth'));

module.exports = router;
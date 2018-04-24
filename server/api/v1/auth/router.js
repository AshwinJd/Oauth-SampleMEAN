const router = require('express').Router();
const {authenticateUser, payloadProvider} = require('./authorize.service');

router.get('/login', authenticateUser);
router.get('/complete/provider', payloadProvider);

module.exports = router;
const jwt = require('jsonwebtoken');
const secret = 'secret';

function authVerifier(req, res, next) {
    try {
        req.claims = jwt.verify(req.cookies.jwt, secret);
        next();
    } catch (err) {
        console.log('Error in verifying token', err);
        if (err.name === 'TokenExpiredError') {
            res.status(401).send({ error: "Session Expired" })
        }
    }
}

module.exports = { authVerifier };
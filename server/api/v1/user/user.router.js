const router = require('express').Router();

function checkAdmin(req, res, next){
    if(req.claims.role === 'admin'){
        next();
    } else {
        res.status(401).send({error: "Admin access requried"});
    }
}

router.get('/', checkAdmin , (req, res) => {

    console.log("req.claims", req.claims.role);
    res.end();
})

module.exports = router;
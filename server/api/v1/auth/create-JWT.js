const jwt = require('jsonwebtoken');
const EXPIRE_TIME = 120;
const secret = 'secret';


function createJWT(data){
    return new Promise((resolve, reject) => {
        let payload = {};
        let _role;

        payload['access_token'] = data[0].access_token;
        payload['username'] = data[1].username;
        payload['userid'] = data[1].id;
        payload['avatar'] = data[1].avatar_url;

        if(data[1].is_admin){
            _role = "admin";
        } else {
            _role = "user";
        }
        payload['role'] = _role;
        
        let options = {
            subject: _role,
            expiresIn: EXPIRE_TIME
        }

        jwt.sign(payload, secret, options, (err, token) => {
            if(err){
                console.log("error in creating token", err);
                reject(err);
            }
            resolve(token);
        })
    })
}

module.exports = {
    createJWT,
}
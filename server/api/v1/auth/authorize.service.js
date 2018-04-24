const axios = require('axios');
const APP_ID = '';
const REDIRECT_URI = 'http://localhost:3000/api/v1/auth/complete/provider';
const SECRET = '';
const { createJWT } = require('./create-JWT');

function authenticateUser(req, res) {
    let url = `https://gitlab-dev.stackroute.in/oauth/authorize?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    res.redirect(url);
}


function getAccessToken(code) {
    return new Promise((resolve, reject) => {

        let parameters = `client_id=${APP_ID}&client_secret=${SECRET}&code=${code}&grant_type=authorization_code&redirect_uri=${REDIRECT_URI}`;
        axios.post(`https://gitlab-dev.stackroute.in/oauth/token/?${parameters}`, {})
            .then(response => {
                resolve(response.data);
            }, (err) => {
                reject(err);
            })
    });
}

function getUserProfile(token) {
    return new Promise((resolve, reject) => {
        axios.get(`https://gitlab-dev.stackroute.in/api/v3/user/?access_token=${token.access_token}`, {})
            .then(response => {
                resolve([token, response.data]);
            }, (err) => {
                reject(err);
            })
    })
}



function payloadProvider(req, res) {

    let getJWTToken = getAccessToken(req.query.code).then(getUserProfile).then(createJWT).then((token) => {
        res.cookie('jwt', token).redirect('/#/home')
        console.log("finally token", token);
    })
}

module.exports = {
    authenticateUser,
    payloadProvider,
}
const express = require ('express');

const usersR = require('./usersR.js');
const commentsR = require('./commentsR.js');

function routerApi(app){
    const router = express.Router();
    app.use('/pwaApi/dev', router);
    router.use('/users', usersR);
    router.use('/comments',commentsR);
}

module.exports = routerApi;
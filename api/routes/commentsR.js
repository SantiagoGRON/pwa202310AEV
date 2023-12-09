const express = require('express');
const router = express.Router();

const commentsClass = require('../services/commentsS');
const commentsService = new commentsClass();

router.post('/createComment', async(req,res,next) => {
    const body = req.body;
    let result = "";
    let myRequest = await commentsService.createComment(body);
        result = {
            "status":200,
            "Mensaje":"comentario registrado",
            "commentId": myRequest
        }
    res.json(result)
});

router.get('/getComments', async(req,res,next) => {
    let result = "";
    let myRequest = await commentsService.getComment();
    result = {
        "status":200,
        "Mensaje":"comentario registrado",
        "data":myRequest
    }

    res.json(result)
});

module.exports=router;
//create a web server
const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

//GET /comments/new
router.get('/comments/new', commentsCtrl.new);
//POST /comments
router.post('/comments', commentsCtrl.create);
//DELETE /comments/:id
router.delete('/comments/:id', commentsCtrl.delete);

module.exports = router;
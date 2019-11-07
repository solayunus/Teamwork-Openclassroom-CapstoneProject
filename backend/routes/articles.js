const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/articles');




router.get('/', articleCtrl.getArticles);
router.delete('/:id', articleCtrl.deleteArticle);
router.post('/', articleCtrl.createArticle);
router.put('/:id', articleCtrl.updateArticle);

module.exports = router;
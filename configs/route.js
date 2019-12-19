const router = require('express').Router();


const PostsComponent = require('../components/posts.component');
const Posts = new PostsComponent();


router.get('/posts', (req, res) => res.sendAsyncApi(Posts.selectAll()));

router.get('/posts/:id', (req, res) => res.sendAsyncApi(Posts.selectOne(req.params.id)));

router.post('/posts', (req, res) => res.sendAsyncApi(Posts.create(req.body)));

router.put('/posts/:id', (req, res) => res.sendAsyncApi(Posts.update(req.params.id, req.body)));

router.delete('/posts/:id', (req, res) => res.sendAsyncApi(Posts.delete(req.params.id)));


module.exports = router;
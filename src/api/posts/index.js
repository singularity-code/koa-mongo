const Router = require('koa-router');
const postsController = require('./posts.ctrl');
const posts = new Router();

posts.get('/', postsController.list);
posts.post('/', postsController.write);
posts.get('/:id', postsController.read);
posts.delete('/:id', postsController.remove);
posts.put('/:id', postsController.replace);
posts.patch('/:id', postsController.update);
module.exports = posts;

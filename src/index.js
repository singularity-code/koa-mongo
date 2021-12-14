const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

// get, post, put, delete
router.use('/api', api.routes());

//apply parser before router
app.use(bodyParser());

// apply router to the instance
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('server is running at http://localhost:4000');
});

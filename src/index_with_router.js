const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// get, post, put, delete
router.get('/', async (ctx) => {
  ctx.body = 'H';
});

router.get('/about', async (ctx) => {
  ctx.body = 'About';
});

router.get('/about/:name?', async (ctx) => {
  const { name } = ctx.params;
  ctx.body = name ? `Name ${name}` : 'Name';
});

router.get('/posts', (ctx) => {
  const { id } = ctx.query;
  ctx.body = id ? `Post ${id}` : 'Post does not exist';
});

// apply router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('server is running at http://localhost:4000');
});

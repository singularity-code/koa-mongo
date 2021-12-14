require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

// deconstructing assignment
const { PORT, MONGO_URI } = process.env;

//connect mongoose
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModity: false })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

const api = require('./api');

const app = new Koa();
const router = new Router();

// get, post, put, delete
router.use('/api', api.routes());

//apply parser before router
app.use(bodyParser());

// apply router to the instance
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log('server is running at http://localhost:4000');
});

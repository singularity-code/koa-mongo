/* eslint-disable no-global-assign */
require = require('esm')(module /*, options*/);
module.exports = require('./index.js');

require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import generateFakeData from './generate_fake_data';

import api from './api';
import jwt_middleware from './lib/jwt_middleware';

// deconstructing assignment
const { PORT, MONGO_URI, USER_NAME, PASSWORD } = process.env;

//connect mongoose
mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('MongoDB Connected');
    // generate fakeblog
    //generateFakeData();
  })
  .catch((err) => console.log(err));

const app = new Koa();
const router = new Router();

// get, post, put, delete
router.use('/api', api.routes());

//apply parser before router
app.use(bodyParser());
app.use(jwt_middleware);

// apply router to the instance
app.use(router.routes())
app.use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log('server is running at http://localhost:4000');
});

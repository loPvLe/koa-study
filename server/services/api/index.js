const Router = require('koa-router');
const index = require('./list/routes');


const v1 = new Router({
  prefix: '/v1',
});

v1.use(index.routes());

module.exports = v1;

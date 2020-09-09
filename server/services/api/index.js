const Router = require('koa-router');
const list = require('./list/routes');


const v1 = new Router({
  prefix: '/v1',
});

v1.use(list.routes());

module.exports = v1;

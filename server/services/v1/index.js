const Router = require('koa-router');
const food = require('./food/routes');
const list = require('./list/routes');

const v1 = new Router({
  prefix: '/v1',
});

v1.use(food.routes());
v1.use(list.routes());

module.exports = v1;

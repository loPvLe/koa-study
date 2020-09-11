const Router = require('koa-router');

const router = new Router({
  prefix: '/list',
});

router.get('/', async (ctx) => {

  console.log(ctx)
  ctx.status = 200;
});

module.exports = router;

const Router = require('koa-router');

const router = new Router({
    prefix: '/food',
});

router.get('/', async (ctx) => {

    console.log(ctx)
    ctx.status = 200;
});

router.put('/', async (ctx) => {

    console.log(ctx)
    ctx.status = 200;
});

module.exports = router;

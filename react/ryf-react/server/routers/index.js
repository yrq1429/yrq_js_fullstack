const router = require('koa-router')();
const User = require('../model/user');
const koaBody = require('koa-body')
router.get('/', async(ctx) => {
  ctx.body = '首页'
});
router.get('/users', async(ctx) => {
  const user = await User.findAll({
    where: {
      isdelete: 0
    }
  })
  ctx.body = user
});

router.post('/user', koaBody(), async (ctx) => {
  // 后端要拿到前端传过来的数据  koaBody()
  const user = await User.build(ctx.request.body).save();
  ctx.body = user
})

module.exports = router;
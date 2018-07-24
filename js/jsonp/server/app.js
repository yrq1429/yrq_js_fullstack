const koa = require('koa');
const app = new koa();
const router = require('koa-router')();
router.get('/api', (ctx) => {
  const data = {
    name: 'zk',
    age: 18
  }
  const callback = ctx.query.jsonpcallback;
  if (callback) {
  ctx.body = callback + '(' + JSON.stringify(data) + ')';    
  }else {
    ctx.body = body;
  }
})
app.use(router.routes());
app.listen(3000)
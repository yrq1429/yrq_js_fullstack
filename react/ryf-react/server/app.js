const koa = require('koa');
const app = new koa();
const router = require('./routers/index.js');
const cors = require('koa-cors')
app.use(cors({
  origin: 'http://localhost:3000',
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
app.use(router.routes());
app.listen(3006);
console.log('app started at port 3006...')
const koa = require('koa')
const koaRouter = require('koa-router')
const koaEjs = require('koa-ejs')
const path = require('path')
const koaStatic = require('koa-static')
const koaBodyparser = require('koa-bodyparser')

let app = new koa();
app.use(koaBodyparser());
let router = new koaRouter();

koaEjs(app,{
  root:path.resolve(__dirname,'template'),
  layout:false,
  viewExt: 'ejs',
  cache: false,
  debug: false
})

router.get('/', async ctx => {
  ctx.body = '首页';
})

app.use(router.routes());
router.use('/admin', require('./router/admin'))

app.use(koaStatic('./static'))
app.listen(3000);
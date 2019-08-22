const Koa = require('koa');
const Router = require('koa-router');
 
const app = new Koa();

let home = new Router();
home.get('/sam',async ctx => {
  ctx.body = 'Home Sam page';
}).get('/todo',async ctx => {
  ctx.body = 'Home Todo page';
})

let page = new Router();
page.get('/sam',async ctx => {
  ctx.body = 'Page Sam page';
}).get('/todo',async ctx => {
  ctx.body = 'Page Todo page';
})

// 父级路由
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000,()=>{
  console.log('starting at port 3000');
});
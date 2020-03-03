const koaRouter = require('koa-router')
const axios = require('axios')
const querystring = require('querystring')

let router = new koaRouter()

router.get('/', async ctx => {
  await ctx.render('admin/admin')
})

router.post('/login', async ctx => {
  let {username, password} = ctx.request.body;
  let { data } = await axios({
    url: "http://ocalhost/login/check.php",
    method: "post",
    data: {
      username,
      password
    },
    // 数据格式转化
    // username=sam&password=111 string queryString
    // data {} json对象 Content-Type 
    transformRequest: [
      data => {
        return querystring.stringify(data)
      }
    ]
  })
  console.log(data)
  ctx.body = {
    status: 200
  }
})

module.exports = router.routes()
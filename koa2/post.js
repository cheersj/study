const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
  // 当请求是get请求时，显示表单让用户填写
  if (ctx.url === '/' && ctx.method === 'GET') {
    const webtitle = 'Koa2 request post demo';
    const html = `
      <h1>${webtitle}</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /> <br/>
        <p>age</p>
        <input name="age" /> <br/>
        <p>webSite</p>
        <input name='webSite' /><br/>
        <button type="submit">submit</button>
      </form>
    `;
    ctx.body = html;
  // 当请求是post请求时
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    let pastData = await parsePostData(ctx);
    ctx.body=pastData;
  // 其他请求显示404页面
  } else {
    ctx.body='<h1>404!</h1>';
  }
});

function parsePostData(ctx) {
  return new Promise((resolve,reject)=>{
    try {
      let postdata = '';
      ctx.req.on('data',data=>{
        postdata += data;
      })
      ctx.req.addListener('end',()=>{
        let parseData = parseQueryStr(postdata)
        resolve(parseData);
      })
    } catch (error) {
      reject(error);
    }
  })
}

function parseQueryStr(queryStr) {
  let queryData = {};
  let queryStrList = queryStr.split('&');
  console.log(queryStrList);
  console.log(queryStrList.entries());
  for (const [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=');
    console.log(itemList);
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }
  return queryData;
}

app.listen(3000,()=>{
  console.log('[demo] server is starting at port 3000');
});
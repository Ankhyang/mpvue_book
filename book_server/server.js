const Koa = require('koa')
const KoaRouter = require('koa-router')
var Fly = require('flyio/src/node')
var jwt = require('jsonwebtoken')

// eslint-disable-next-line new-parens
var fly = new Fly

// 1. 生成对应的实例对象
const app = new Koa()
const router = new KoaRouter()

// 核心代码
router.get('/', (ctx, next) => {
  // 1. 获取请求参数
  // 2. 根据地址和参数处理数据
  // 3. 响应数据
  ctx.body = '服务器返回的数据'
})

// 获取用户appId
router.get('/getAppId', async (ctx, next) => {
  // 获取请求参数
  let code = ctx.query.code
  console.log(code)
  let appId = 'wxafcf120f30a43145'
  let appSecrect = '5408621cd277fc816c0640620ef9ecd6'
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecrect}&js_code=${code}&grant_type=authorization_code`
  let result = await fly.get(url)
  let userInfo = JSON.parse(result.data)
  console.log(userInfo)
  // 将用户的openid和key存入token , 即自定义登录状态
  var token = jwt.sign(userInfo, 'ankhYang')
  console.log(token)
  ctx.body = token
// eslint-disable-next-line no-trailing-spaces
}) 
let data = require('./datas/data.json')
router.get('/searchBook', (ctx, next) => {
  // 获取请求参数
  let req = ctx.query.req
  // 数据处理
  let bookArray = data.filter(item => {
    return item['title'].includes(req)
  })
  // let bookArray = data
  ctx.body = bookArray
})
// 2. 使用路由器及路由
app
  .use(router.routes()) // 声明使用路由
  .use(router.allowedMethods()) // 允许使用的路由方法

// 3. 监听端口
app.listen('3000', () => {
  console.log('服务器启动成功....')
  console.log('服务器地址：http://localhost:3000')
})

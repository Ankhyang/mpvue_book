// 携带token的方式：1.cookie, 2.存入url, 3. 请求头
import config from './config'
let token = wx.getStorageSync('token')
export default function (url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      header: {
        authorization: token
      },
      success: res => {
        resolve(res.data)
      },
      error: err => {
        reject(err)
      }
    })
  })
}

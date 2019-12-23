<script type="text/javascript">
import request from './utils/request'
export default {
  mounted () {
    wx.login({
      success: async res => {
        // 1. 获取临时登录凭证
        let code = res.code
        let token = await request('/getOpenId', {code})
        // 将token存入storage
        await wx.setStorageSync('token', token)
        // 获取验证后的token数据
        let result = await request('/test')
        console.log(result)
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  page  
    width: 100%;
    height: 100%;
</style>



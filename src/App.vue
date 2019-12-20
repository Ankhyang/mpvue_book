<script type="text/javascript">
import request from './utils/request'
export default {
  mounted () {
    wx.login({
      success: async res => {
        // 1. 获取临时登录凭证
        let code = res.code
        let token = await request('/getAppId', {code})
        console.log(token)
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



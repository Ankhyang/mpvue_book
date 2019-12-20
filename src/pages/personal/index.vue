<template>
  <div id="personContainer">
    <div class="header">
      <img :src="src" alt="">
      <button open-type="getUserInfo" @getuserinfo="userInfo">{{nickName}}</button>
    </div>
    <div class="cardList">
      <div class="card">
        <span>扫码读书</span>
        <span class="more"> > </span>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      src: '/static/images/personal/personal.png',
      nickName: '登录'
    }
  },
  methods: {
    userInfo (e) {
      this.src = e.mp.detail.userInfo.avatarUrl
      this.nickName = e.mp.detail.userInfo.nickName
    }
  }
  // mounted () {
  //   wx.getUserInfo({
  //     success: res => {
  //       this.userInfo = res.userInfo
  //     },
  //     error: err => {
  //       console.log(err)
  //     }
  //   })
  // }
}
</script>

<style lang="stylus" scoped>
  #personContainer
    .header
      padding 40rpx
      background #00F5B8
      img
        width 100rpx
        height 100rpx
        vertical-align middle
        border-radius 50rpx
      button
        display inline-block
        height 60rpx
        line-height 60rpx
        background rgba(255,255,255, 0.5)
        vertical-align middle
        margin-left 40rpx
        max-width:200rpx
    .cardList
      .card
        width 94%
        height 60rpx
        line-height 60rpx
        margin 10rpx auto
        border-bottom 1rpx solid #eee
        padding 10rpx
        .more
          float right
</style>

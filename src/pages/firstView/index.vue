<template>
  <div id="swiper_div">
    <swiper indicator-dots indicator-color="#cccccc" indicator-active-color="#4D79FF" circular>
      <swiper-item>
        <img src="/static/images/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper> 
    <button plain>开始体验</button>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #swiper_div
    width: 100%
    height: 100%
    swiper
      width: 100%
      height: 100%
      swiper-item
        width: 100%
        height: 100%
        img 
          width: 100%
          height: 100%  
    button
      width 280rpx
      height  80rpx
      text-align center
      line-height 80rpx
      position absolute
      bottom 20rpx
      left 50%
      margin-left -140rpx
      background rgba(255, 255, 255, .8)
      border 2rpx solid #fcfcfc
</style>

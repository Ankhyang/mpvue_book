<template>
  <div>
    <div class="bookItem" v-for="(item, index) in bookArr" :key="index" @click="toDetail(item)">
      <img :src="item.image" alt="">
      <div class="info">
        <p>{{item.title}}</p>
        <p>{{item.author}}</p>
        <p>出版社：{{item.publisher}}</p>
      </div>
      <p class="price">{{item.price}}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['bookArr'],
  data () {
    return {
      bookArr: []
    }
  },
  mounted () {
    if (this.$mp) {
      this.bookArr = JSON.parse(this.$mp.query.bookArr)
    }
  },
  methods: {
    toDetail (item) {
      wx.navigateTo({
        url: '/pages/detail/main?item=' + JSON.stringify(item)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bookItem
    display flex
    padding 10rpx
    border-bottom 1px solid #eeeeee
    img 
      width 140rpx
      height 140rpx
    .info
      font-size 28rpx
      line-height 50rpx
      width 70%
      padding-left 10rpx
    .price
      color red
      font-weight bold
      font-size 36rpx
</style>

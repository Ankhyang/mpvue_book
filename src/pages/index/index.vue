<template>
  <div id="indexContainer">
    <swiper indicator-dots indicator-color="#cccccc" indicator-active-color="#4D79FF" circular>
      <swiper-item v-for="(item, index) in cacusol" :key="index">
        <img :src="item.image" alt="">
      </swiper-item>
    </swiper>
    <div class="bookList">
      <div class="listNav">
        <span>全部图书</span>
        <span class="more" @click="toBookList(bookArr)"> >> </span>
      </div>
      <div class="list">
        <div class="book_item" v-for="(item, index) in bookArr" :key="index" @click="navigateToDetail(item)">
          <img :src="item.image" :alt="item.title">
          <p>《{{item.title}}》</p>
          <p>{{item.author}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import datas from './datas/data.json'
export default {
  data () {
    return {
      bookArr: datas
    }
  },
  computed: {
    cacusol () {
      return [...this.bookArr].splice(0, 4)
    }
  },
  methods: {
    navigateToDetail (item) {
      wx.navigateTo({
        url: '/pages/detail/main?item=' + JSON.stringify(item)
      })
    },
    toBookList (bookArr) {
      wx.navigateTo({
        url: '/pages/bookList/main?bookArr=' + JSON.stringify(bookArr)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  #indexContainer
    swiper 
      width 100%
      height 400rpx
      img   
        width 100%
        height 100%
    .bookList 
      width 100%
      .listNav
        width 100%
        height 40rpx
        font-size 28rpx
        padding 10rpx
        .more
          float right
          padding-right 20rpx
          color #003DF5
      .list
        width 100%
        display flex
        flex-wrap wrap
        margin-top 10rpx
        .book_item
          width 50%
          box-sizing border-box
          padding 20rpx 0
          display flex
          flex-direction column
          font-size 28rpx
          align-items center
          border-bottom 1rpx solid #eee
          &:nth-child(2n+1) 
            border-right 1rpx solid #eee
          img 
            width 200rpx
            height 200rpx
</style>

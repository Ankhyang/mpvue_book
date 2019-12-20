<template>
  <div id="searchContainer">
    <div class="searchHeader">
      <input type="text" v-model="searchValue" placeholder="书中自有黄金屋" confirm-type="done" @confirm="handleConfirm"
      placeholder-style="color:#02a774;text-align:center;">
      <span @click="handleClear" class="clear" v-show="searchValue">×</span>
    </div>
    <div v-if="bookArr.length">
      <BookList :bookArr="bookArr"/>  
    </div>
  </div>
</template>

<script type="text/javascript">
import BookList from '../bookList/index'
import request from '../../utils/request.js'
export default {
  components: {
    BookList
  },
  data () {
    return {
      searchValue: '',
      bookArr: []
    }
  },
  methods: {
    async handleConfirm () {
      let data = {req: this.searchValue}
      this.bookArr = await request('/searchBook', data)
    },
    handleClear () {
      this.searchValue = ''
      this.bookArr = []
    }
  }
}
</script>

<style lang="stylus" scoped>
  #searchContainer
    .searchHeader
      width 80%
      height 80rpx
      margin auto
      border-bottom 1rpx solid #02a774
      position relative
      input 
        width 100%
        height 100%
      .clear
        color red
        font-weight bold
        position absolute
        right 20rpx
        top 20rpx
        z-index 999
</style>

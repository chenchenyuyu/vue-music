<template>
  <div class="recommend" ref="recommend">
    <!-- :data传入discList歌单数据。高度变化，实现数据的变化. -->
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <!-- fastclick与better-scroll冲突的时候，通过img多定义class(class=needsclick)解决 -->
          <slider>
            <div v-for="(item, index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImage" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <!-- img v-lazy实现图片懒加载 -->
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li @click="selectItem(item)" v-for="(item, index) in discList" class="item" :key="index">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from 'base/slider/slider'
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import { getRecommend, getDiscList } from 'api/recommend'
import { playlistMixin } from 'common/js/mixin'
import { ERR_OK } from 'api/config'
import { mapMutations } from 'vuex'

export default {
  mixins: [playlistMixin],
  data() {
    return {
      recommends: [],
      discList: []
    }
  },
  created() {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''

      this.$refs.recommend.style.bottom = bottom
      this.$refs.scroll.refresh()
    },
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true
        this.$refs.scroll.refresh()
      }
    },
    // 点击列表项路由跳转，跳转到推荐页面的详情
    selectItem(item) {
      this.$router.push({
        path: `/recommend/${item.dissid}`
      })
      this.setDisc(item) // commit setDisc
    },
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list
        }
      })
    },
    // 使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）
    // mapMutations将this.setDisc映射为this.$store.commit('SET_DISC')
    ...mapMutations({
      setDisc: 'SET_DISC'
    })
  },
  components: {
    Slider,
    Loading,
    Scroll
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>

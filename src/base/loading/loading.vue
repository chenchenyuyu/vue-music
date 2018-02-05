<template>
<!-- 实际项目过程出现数据加载缓慢，影响用户体验，通过loading提升用户体验 -->
  <div class="loading">
    <img src="./loading.gif" alt="loading" width="24" height="24">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>
<style scoped lang="stylus">
@import "~common/stylus/variable"
 .loading
    width: 100%
    text-align: center
    .desc
      line-height: 20px
      font-size: $font-size-small
      color: $color-text-l
</style>

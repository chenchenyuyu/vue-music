<template>
  <div class="music-list">
    <div class="back">
      <i class="back-icon"></i>
    </div>
    <h1 class="title" v-html="title"></h1>
    <div class="bg-image" :style="bgStyle" ref="bgImage">
      <div class="play-wrapper">
        <div class="play">
          <i class="icon-play"></i>
          <div class="text-play">随机播放全部</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>

</style>

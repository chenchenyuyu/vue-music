<template>
  <div class="suggest">
     <scroll>
       <ul class="suggest-list">
         <li class="suggest-item">
            <div class="icon"><i class="icon-music"></i></div>
            <div class="name"><p class="text"></p></div>
         </li>
         <loading v-show="hasMore" title=""></loading>
       </ul>
       <div class="no-result-wrapper" v-show="!hasMore && !result.length">
         <no-result title="抱歉，暂无搜索结果"></no-result>
       </div>
     </scroll>
  </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import NoResult from 'base/no-result/no-result'
import { search } from 'api/search'
import { ERR_OK } from 'api/config'
import { createSong } from 'common/js/song'
import { mapMutations, mapActions } from 'vuex'
import Singer from 'common/js/singer'

export default {
  data() {
    return {}
  },
  components: {
    Scroll,
    Loading
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.suggest {
  height: 100%;
  overflow: hidden;

  .suggest-list {
    padding: 0 30px;

    .suggest-item {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
    }

    .icon {
      flex: 0 0 30px;
      width: 30px;

      [class^='icon-'] {
        font-size: 14px;
        color: $color-text-d;
      }
    }

    .name {
      flex: 1;
      font-size: $font-size-medium;
      color: $color-text-d;
      overflow: hidden;

      .text {
        no-wrap();
      }
    }
  }

  .no-result-wrapper {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>

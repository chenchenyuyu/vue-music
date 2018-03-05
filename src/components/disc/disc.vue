<template>
<transition name="slider">
  <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
</transition>
</template>

<script>
import MusicList from 'components/music-list/music-list'
import { getSongList } from 'api/recommend'
import { ERR_OK } from 'api/config'
import { mapGetters } from 'vuex'
import { createSong } from 'common/js/song'
export default {
  computed: {
    title() {
      return this.disc.dissname
    },
    bgImage() {
      return this.disc.imgurl
    },
    // store.getters.disc store中派生出状态
    ...mapGetters(['disc'])
  },
  data() {
    return {
      songs: []
    }
  },
  created() {
    this._getSongList()
    // console.log('songList', this._getSongList())
    // console.log('getSongList', getSongList())
  },
  methods: {
    _getSongList() {
      if (!this.disc.dissid) {
        this.$router.push('/recommend')
        return
      }
      getSongList(this.disc.dissid).then((res) => {
        // console.log('res-songList', res)
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.cdlist[0].songlist)
        }
      })
    },
    // 处理数据
    _normalizeSongs(list) {
      let ret = []
      list.forEach(musicData => {
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  components: {
    MusicList
  }
}
</script>

<style lang="stylus" scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>

<template>
  <div class="listview">
    <div class="list-group">
      <h2 class="list-fixed">热门</h2>
      <ul class="list-song">
         <li v-for="(item, index) in items" :key="index" class="list-group-item">
           <img src="" alt="avatar" class="avatar">
           <span class="name">名字</span>
           {{item.song}}
         </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 模拟数据
export default {
  data() {
    return {
      items: [{ song: '青花瓷' }, { song: '勇气' }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-fixed
    height: 30px
    line-height: 30px
    padding-left: 20px
    font-size: 12px
    color: rgba(255,255,255,0.5)
    background: #333
</style>

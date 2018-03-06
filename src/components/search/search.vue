<template>
  <div class="search">
    <div class="search-box-wapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>
    <div class="shortcut-wapper" v-show="!query">
      <div class="shortcut">
        <scroll :refreshDelay="refreshDelay" ref="shortcut" class="shortcut" :data="shortcut">
          <div>
            <div class="hot-key">
              <h1 class="title">热门搜索</h1>
               <ul>
                 <li @click="addQuery" v-for="item in hotKey" class="item">
                   <span></span>
                 </li>
               </ul>
            </div>
          </div>
          <div class="search-history" v-show="searchHistory.length">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear" @click="showConfirm">
                <i class="icon-clear"></i>
              </span>
            </h1>
           <search-list @delete="deleteSearchHistory" @select="addQuery" :searchs="searchHistory"></search-list>
          </div>
        </scroll>
      </div>
    </div>
    <div class="search-result" v-show="query" ref="searchResult">
      <suggest></suggest>
    </div>
    <confirm></confirm>
    <router-view></router-view>
  </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import SearchBox from 'base/search-box/search-box'
import SearchList from 'base/search-list/search-list'

export default {
  
}
</script>

<style lang="stylus" scoped>

</style>

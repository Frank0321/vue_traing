<template>
  <div>
    網頁網址為 : /detail?id=1
    <ul>
      <li v-for="(hero, index) in heros" :key="index">
        {{hero.name}}
        <!-- /detail?id=1 -->
        <router-link :to="{name:'detail-query', query:{id:index}}"> 查看</router-link>
      </li>
    </ul>
    網頁網址為 : /detail/id=1
    <ul>
      <li v-for="(hero, index) in heros" :key="index">
        {{hero.name}}
        <!-- /detail?id=1 -->
        <router-link :to="{name:'detail-params', params:{id:index}}"> 查看</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "lesson22",
  data() {
    return {
      heros: [
        {name: '李白'},
        {name: '王小白'}
          ]
    }
  }
}
</script>

<style scoped>

</style>
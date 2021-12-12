<template>
  <div>
    <div class="h">頭部</div>
    <div class="b">
      <a href="/movie">進入電影</a>
      <router-link :to="{name: 'musicUrl'}">進入音樂1</router-link>
      <router-link to="/music">進入音樂2</router-link>
      <router-link :to=" '/music' ">進入音樂3</router-link>
    </div>
    <div class="f">底部</div>
  </div>

</template>

<script>
export default {
  name: "lesson21"
}
</script>

<style scoped>
.h {
  height: 100px;
  background-color: yellowgreen;
}
.b {
  height: 100px;
  background-color: skyblue;
}
.f {
  height: 100px;
  background-color: pink;
}
</style>
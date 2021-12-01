<template>
  <div>
    我是{{textOne}}頭
    <button @click="show"> 從 js 中獲取父組件</button>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {

    }
  },
  props: [
      'textOne'
  ],
  methods:{
    show(){
      alert(this.textOne);
    }
  }
}
</script>

<style scoped>
  div {
    height: 100px;
    background-color: yellowgreen;
  }
</style>
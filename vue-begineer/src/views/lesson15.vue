<template>
  <div>
    lesson 15 獲取 DOM 的元素
    <div ref="myDiv">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name: "lesson15",
  data(){
    return{
      text: 123,
    }
  },
  //駔見創建後，數據已經完成初始化，但是 DOM 還未生成
  created() {
    console.log('create :', this.$refs.myDiv);
  },
  //數據裝載 DOM 上後，各種數據已經就位，將數據渲染到 DOM 上，DOM已經生成
  mounted() {
    console.log('mounted :', this.$refs.myDiv);
    this.$refs.myDiv.innerHTML ='哈哈';
  }
}
</script>

<style scoped>

</style>
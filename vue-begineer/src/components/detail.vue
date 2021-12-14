<template>
  <div>
    我是 detail
  </div>
</template>

<script>
export default {
  name: "detail",
  created() {
    //獲取參數
    console.log('query :', this.$route.query);
    console.log('params :', this.$route.params);
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
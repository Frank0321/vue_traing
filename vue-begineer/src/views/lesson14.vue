<template>
  <div>
    請輸入內容
    <input type="text" name="ABC" v-model="text">
    顯示: {{text | myFilter}}
  </div>
</template>

<script>
export default {
  name: "lesson14",
  filters:{
    myFilter1: function (value) {
      // value 就是 text
      // 將輸入的內容反轉過來
      return value.split('').reverse().join('');
      // return value+1;
    }
  },
  data(){
    return{
      text: '',
      arr: []
    }
  }
}
</script>

<style scoped>

</style>
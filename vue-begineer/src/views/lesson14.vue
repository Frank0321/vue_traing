<template>
  <div>
    請輸入內容
    <input type="text" name="ABC" v-model="text">
    顯示: {{text | myFilter}}
    <sub-filter/>
  </div>
</template>

<script>
import subfilter from "../components/subfilter";

export default {
  name: "lesson14",
  filters:{
    myFilter: function (value) {
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
  },
  components: {
    subFilter: subfilter
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    獲取普通元件
    <input type="text" class="form-control" ref="inputref">
    獲取列表
    <ui class="list-group">
      <li class="list-group-item" v-for="(item, index) in list" :key="index" ref="list">
        {{item}}
      </li>
    </ui>
    獲取組件

  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1,2,3,4,5,6,7,8,9,10],
    }
  },
  mounted() {
    //獲取 input
    console.log(this.$refs.inputref);
    //修改樣式
    this.$refs.inputref.style.borderColor = "red";
    //獲取焦點
    this.$refs.inputref.focus();


    //////////////////////
    //獲取列表
    console.log(this.$refs.list)

    //隨機加上顏色
    this.$refs.list.forEach((v)=>{
        v.style.backgroundColor = '#'+Math.floor(Math.random()*1000000)
    })
  }
}

</script>

<style scoped></style>

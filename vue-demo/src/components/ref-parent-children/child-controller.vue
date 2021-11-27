<template>
  <div>
    <h2>{{header}}</h2>
    <input type="text" class="form-control" v-model="val" ref="child-input" @input="changeInput">
  </div>
</template>

<script>
export default {
  name: "child-controller",
  data() {
    return {
      header: '標題',
      val: '輸入框'
    }
  },
  methods: {
    renameHeader(data){
      this.header = data;
    },
    changeInput(e){
      console.log(e);
      console.log(e.target.value);
      this.$parent.header = e.target.value;
    }
  }
}
</script>

<style scoped>

</style>
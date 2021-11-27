<template>
  <div>
    <h2>{{val}}</h2>
    <input type="text" class="form-control" v-model="val" ref="child-input">
  </div>
</template>

<script>
export default {
  name: "demo-item",
  data() {
    return {
      val: '輸入框'
    }
  },
  methods: {
    focus() {
      this.$refs["child-input"]
    }
  }
}
</script>

<style scoped>

</style>
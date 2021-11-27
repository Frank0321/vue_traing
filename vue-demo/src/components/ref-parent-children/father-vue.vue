<template>
  <div>
    father vue
    <children ref="chid-item"></children>
  </div>
</template>

<script>
import children from '../ref-parent-children/children-vue'
export default {
  name: "fatherVue",
  components: {
    children,
  },
  mounted() {
    //獲取子組件
    console.log(this.$refs)
  }
}
</script>

<style scoped>

</style>
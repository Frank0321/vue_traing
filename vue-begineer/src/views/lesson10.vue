<template>
  <div>
    <header-vue textOne="大"></header-vue>
    <body-vue v-bind:textTwo="text2"></body-vue>
    <footVue></footVue>
  </div>
</template>

<script>
import headerVue from "../components/lesson8_components/header";
import bodyVue from "../components/lesson8_components/body";
import footVue from "../components/lesson8_components/footer";

export default {
  name: "lesson10",
  data() {
    return {
      text2: '呵呵呵呵'
    }
  },
  components: {
    headerVue,
    bodyVue,
    footVue

  }
}
</script>

<style scoped>

</style>
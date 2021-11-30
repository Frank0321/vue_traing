<template>
  <div>
    <header-vue></header-vue>
    <body-vue></body-vue>
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
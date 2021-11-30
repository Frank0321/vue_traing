<template>
  <div>
    <header-vue />
    <body-vue />
    <footer-vue />
  </div>
</template>

<script>
import headerVue from "../components/lesson8_components/header";
import bodyVue from "../components/lesson8_components/body";
import footerVue from "../components/lesson8_components/footer";
export default {
  name: "Lesson8",
  data() {
    return {

    }
  },
  components: {
    headerVue: headerVue,
    bodyVue,
    footerVue
  }
}
</script>

<style scoped>

</style>
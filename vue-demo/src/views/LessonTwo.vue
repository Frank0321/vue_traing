<template>
  <div class="container">
    lessonTwo
<!--    <demo></demo>-->
    <father></father>
  </div>
</template>

<script>
import demo from "../components/ref-parent-children/demo";
import father from "../components/ref-parent-children/father-vue";
export default {
  name: "LessonTwo",
  components: {
    // demo,
    father,
  }
}
</script>

<style scoped>

</style>
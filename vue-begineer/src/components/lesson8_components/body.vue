<template>
  <div>
    我是body，{{textTwo}}
  </div>
</template>

<script>
export default {
  name: "body",
  props: [
      'textTwo'
  ]
}
</script>

<style scoped>
div {
  height: 100px;
  background-color: hotpink;
}
</style>
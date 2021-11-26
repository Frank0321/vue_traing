<template>
  <div id="app" class="container p-5">

    <demo-ref></demo-ref>
  </div>
</template>
<script>
import demoRef from './components/ref-parent-children/demo';
export default {
  name: 'app',
  components: {
    demoRef
  }
}

</script>
<style lang="scss"></style>

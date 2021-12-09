<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <button @click="btnMethod"> 按鈕</button>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';

export default {
  name: "lesson18",
  methods: {
    btnMethod() {
      // this.$indicator.open('加載中...');
      Toast('Complete');

    }
  }
}
</script>

<style scoped>

</style>
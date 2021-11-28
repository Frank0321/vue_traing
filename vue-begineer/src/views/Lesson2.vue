<template>
  <div>
    <pre>
      <h2>v-test</h2>
            <span v-text="text"></span>
            <input type="text" name="" v-text="text">
      <h2>v-html</h2>
            <span v-html="html"></span>
      <h2>v-if</h2>
            <div v-if="isShow" style="height: 100px; background-color: red"></div>
      <h2>v-show</h2>
            <div v-show="isShow" style="height: 100px; background-color: green"></div>
      <h2>v-model</h2>
            <input type="text" name="" v-model="mText">
            {{mText}}
            <input type="text" name="" v-bind:value="mText">
    </pre>
  </div>
</template>

<script>
export default {
  name: "Lesson2",
  data() {
    return {
      text: '我是 v-text 玩的東西',
      html: `
              <ul>
                <li>哈哈</li>
                <li>呵呵</li>
              </ul>
            `,
      isShow: false,
      mText: '我是 v-model',
    }
  }
}
</script>

<style scoped>

</style>
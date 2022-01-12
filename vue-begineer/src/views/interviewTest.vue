<template>
  <div>
    <div id="textList" class="edit-form">
      <input type="text" class="text-a" name="text-1" id="text-1" value="1">
      <input type="text" class="text-a" name="text-2" id="text-2" value="2">
      <input type="text" class="text-a" name="text-3" id="text-3" value="3">
    </div>
  </div>
</template>

<script>
export default {
  name: "interviewTest",
  mounted() {
    console.log("mounted");
    const inputText = document.getElementsByClassName("text-a");
    for (let i = 0; i < inputText.length; i++){
      console.log(inputText.item(i).value);
    }
  }
}
</script>

<style scoped>

</style>
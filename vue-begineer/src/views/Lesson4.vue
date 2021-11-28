<template>
  <div>
    <div v-bind:class="isRed? 'red':'green'">class 依判斷改變 class 的內容</div>
    <div v-bind:class="{'red': true, 'big': true}">多個</div>
    複雜情況，根據對象的成績，匹配成績找到清單對象
    成績為 key，對象為 value，最終返回字符 串做樣式名
    <ul>
      <li v-for="stu in stus" :class="{'A':'red', 'B':'green'}[stu.score]">
        {{stu.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Lesson4",
  data() {
    return {
      isRed: false,
      stus: [
        {name: 'jack',
         score: 'A'},
        {name: 'mark',
         score: 'B'}
      ]
    }
  }
}
</script>

<style scoped>
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.big {
  font-size: 100px;
}
</style>
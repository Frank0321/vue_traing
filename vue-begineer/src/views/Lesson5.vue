<template>
  <div>
    <div v-bind:class="isRed? 'red':'green'">class 依判斷改變 class 的內容</div>
    <button v-on:click="isRed = !isRed">點我就會變化</button>
    <ul>
      <li v-for="stu in stus" :class="{'A':'red', 'B':'green'}[stu.score]">
        {{stu.name}}
      </li>
    </ul>

    <button v-on:click="change">用函數產生變化</button>
  </div>
</template>

<script>
export default {
  name: "Lesson5",
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
  },
  methods: {
    change(){
        this.isRed = !this.isRed;
        this.stus.push({
          name:'Peter', score: 'C'
        })
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

</style>
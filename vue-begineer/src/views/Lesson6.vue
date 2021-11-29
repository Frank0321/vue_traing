<template>
  <div>
    <ul>
      <li v-for="(stu, index) in stus" :key="index">
        index: {{index}}
        stu: {{stu}}
      </li>
      使用對象的方式<hr/>
      <li v-for="(value, key, index) in person">
        value: {{value}}
        key: {{key}}
        index: {{index}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Lesson6",
  data() {
    return {
      stus: [
          {name: 'jack', score: 'A'},
          {name: 'rose', score: 'B'}
      ],
      person: {
        name: 'mark',
        alise: '馬克'
      }
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <ul>
      <li v-for="(hero, index) in heros" :key="index" :class="{'A':'red', 'B': 'green', 'C':'blue'}[hero.score]">
        {{hero.name}},   {{hero.score}}
        <button @click="del(index)">刪除</button>
      </li>
    </ul>
    英雄姓名 : <input type="text" name="" v-model="name"> <br/>
    英雄成績 : <input type="text" name="" v-model="score">
    <button @click="addHero"> 添加英雄 </button>
  </div>
</template>

<script>
export default {
  name: "Lesson7",
  data() {
    return {
      name: '',
      score: '',
      heros:[
        {
          name: 'Rhys',
          score: 'A'
        },
        {
          name: 'Matt',
          score: 'B'
        },
        {
          name: 'Steven',
          score: 'C'
        }
      ]
    }
  },
  methods: {
    addHero(){
      this.heros.push({
        name: this.name,
        score: this.score
      })
      this.name = '',
      this.score = ''
    },
    del(index){
      this.heros.splice(index,1);
    }
  }
}
</script>

<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
.blue {
  color: blue;
}
</style>
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg | to-lowercase }}</h1>
    <button @click="fruits.push('myNewFruit')">Add new fruit</button>
    <input type="text" v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits"> {{ fruit }} </li>
    </ul>

    <hr/>

    <app-list></app-list>
  </div>
</template>

<script>
import List from './List.vue'
import { fruitMixin } from './fruitMixin'
export default {
  name: 'app',
  data () {
    return {
      msg: 'WELCOME TO YOUR VUE.JS APP',
      fruits: ['Banana', 'Apple', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  components: {
    appList: List 
  },
  mixins:[fruitMixin]
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

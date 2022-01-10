<template>
  <div id="app">
    <header-to-do />
    <todos />
  </div>
</template>

<script>
import HeaderToDo from './components/HeaderToDo'
import Todos from './components/Todos.vue'
export default {
  data(){
    return {

    }
  },
  components : {
    HeaderToDo,
    Todos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="home">

<!-- <TodoList
    v-bind:todos='todos'
    @remove-todo="removeTodo"
    
    /> -->
    <ul v-for="task in allTasks" :key="task.id">
      <li>{{task.title}}</li>
    </ul>



  </div>
  
</template>

<script>

// import TodoList from '@/components/TodoList'

// export default {
//   name: 'Home',
//   components: {
//   }
// }
import {mapGetters} from 'vuex'
import TodoList from '@/components/TodoList'
export default {
  name: 'app',
  computed: mapGetters(["allTasks"]),
  mounted() {
    this.$store.dispatch('getLocalData');
  },
  methods:{
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    getTodos() {
      
    }
  },
  components: {
    TodoList
  }
}
</script>

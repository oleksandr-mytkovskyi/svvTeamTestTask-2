export default {
    state: {
        todos: [
          {id:1, title: 'Get arr', completed: false},
          {id:2, title: 'Get LocalStorage', completed: false},
          {id:3, title: 'Get forEach', completed: false}
        ],
      },
      mutations: {
        updateTasks(state, localData) {
          state.todos = [...todos, ...localData];
        }
      },
      actions: {
        getLocalData(ctx) {
          let localData = JSON.parse(localStorage.getItem('tasks'));
          ctx.commit('updateTasks', localData);
        }
      },
      getters: {
        allTasks(state) {
          return state.todos;
        }
      },
}
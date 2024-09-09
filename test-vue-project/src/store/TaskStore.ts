import { createStore } from 'vuex'
import { TaskItem } from '@/types/TaskItem'

interface State {
  tasks: TaskItem[];
}

export default createStore<State>({
  state: {
    tasks: [
      {
        id: 1,
        title: 'sample text',
        description: 'sample',
        assignedUser: {
          id: 1,
          name: 'sample',
          email: 'sample@sample.com'
        }
      },
      {
        id: 2,
        title: 'sample text2',
        description: 'sample2',
        assignedUser: {
          id: 2,
          name: 'sample2',
          email: 'sample2@sample2.com'
        }
      }
    ]
  },
  mutations: {
    addTask (state, task: TaskItem) {
      state.tasks.push(task)
    },
    removeTask (state, taskId: number) {
      state.tasks = state.tasks.filter(task => task.id !== taskId)
    },
    updateTask (state, updatedTask: TaskItem) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id)
      if (index !== -1) {
        state.tasks[index] = updatedTask
      }
    }
  },
  actions: {
    addTask ({ commit }, task: TaskItem) {
      commit('addTask', task)
    },
    removeTask ({ commit }, taskId: number) {
      commit('removeTask', taskId)
    },
    updateTask ({ commit }, updatedTask: TaskItem) {
      commit('updateTask', updatedTask)
    }
  },
  getters: {
    getTaskById: (state) => (id: number) => {
      return state.tasks.find(task => task.id === id)
    }
  }
})

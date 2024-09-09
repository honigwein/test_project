<template>
  <div class="max-w-3xl mx-auto p-4">
    <ul class="space-y-4 mb-8">
      <li v-for="task in tasks" :key="task.id" class="bg-white p-4 shadow rounded-lg flex flex-col space-y-2">
        <h3 class="text-lg font-semibold text-gray-800">{{ task.title }}</h3>
        <p class="text-gray-600">{{ task.description }}</p>
        <p class="text-sm text-gray-500">Assigned to: {{ task.assignedUser.name }} ({{ task.assignedUser.email }})</p>
        <div class="flex space-x-4">
          <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" @click="removeTask(task.id)">Delete</button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" @click="editTask(task)">Edit</button>
        </div>
      </li>
    </ul>

    <form @submit.prevent="addNewTask" class="bg-white p-6 shadow rounded-lg space-y-4">
      <div class="flex flex-col space-y-2">
        <input class="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" v-model="newTask.title" placeholder="Task Title" />
        <input class="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" v-model="newTask.description" placeholder="Task Description" />
        <input class="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" v-model="newTask.assignedUser.name" placeholder="User Name" />
        <input class="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" v-model="newTask.assignedUser.email" placeholder="User Email" />
      </div>
      <button class="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" type="submit">Add Task</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { TaskItem } from '@/types/TaskItem'

const store = useStore()
const tasks = computed(() => store.state.tasks)
const newTask = ref<TaskItem>({
  id: Date.now(),
  title: '',
  description: '',
  assignedUser: {
    id: Date.now(),
    name: '',
    email: ''
  }
})
function addNewTask () {
  if (newTask.value.title && newTask.value.description) {
    store.dispatch('addTask', newTask.value)
    newTask.value = {
      id: Date.now(),
      title: '',
      description: '',
      assignedUser: { id: Date.now(), name: '', email: '' }
    }
  }
  console.log(newTask.value.id)
}

function removeTask (taskId: number) {
  store.dispatch('removeTask', taskId)
}
function editTask (task: TaskItem) {
  const updatedTask = { ...task, title: 'Edited title' }
  store.dispatch('updateTask', updatedTask)
}
</script>

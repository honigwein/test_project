<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6 text-center">User List</h1>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <li v-for="user in users" :key="user.id" class="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 class="text-xl font-semibold mb-2">{{ user.name }}</h2>
        <h2 class="text-xl font-semibold mb-2 mt-10">Company info: </h2>
        <p class="text-gray-700">{{user.company.name}}</p>
        <p class="text-gray-700">{{ user.company.catchPhrase }}</p>
        <p class="text-gray-700">{{ user.company.bs }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue'
import UserService, { User } from '../services/UserCompanyInfoService'

const users = ref<User[]>([])
const fetchUsers = async () => {
  users.value = await UserService.getUsers()
}

onMounted(fetchUsers)

</script>

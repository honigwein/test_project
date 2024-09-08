<template>
  <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div>
          <label class="block text-sm font-medium text-gray-700 mb-1" for="selectBox">Select option:</label>
          <select class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm" id="selectBox" v-model="selectedOption">
              <option disabled value="">Chose option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
          </select>
      </div>
      <div class="flex items-center">
        <input id="saveToCookie" class="h-4 w-4 border-gray-300 rounded" type="checkbox" v-model="saveToCookie" />
        <label for="saveToCookie" class="ml-2 block text-sm text-gray-900">
            Save to cookie
        </label>
      </div>
  </div>
</template>
<script setup lang="ts">

import { ref, onMounted, watch } from 'vue'

const selectedOption = ref('')
const saveToCookie = ref(false)

function handleSelectChange () {
  if (saveToCookie.value) {
    setCookie('selectedOption', selectedOption.value, 15)
  } else {
    deleteCookie('selectedOption')
  }
}

function setCookie (name: string, value: string, minutes: number) {
  const date = new Date()
  date.setTime(date.getTime() + minutes * 60 * 1000)
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`
}

function deleteCookie (name: string) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`
}

onMounted(() => {
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith('selectedOption='))
    ?.split('=')[1]

  if (cookieValue) {
    selectedOption.value = cookieValue
    saveToCookie.value = true
  }
})

watch(selectedOption, () => {
  handleSelectChange()
})
watch(saveToCookie, () => {
  handleSelectChange()
})
</script>

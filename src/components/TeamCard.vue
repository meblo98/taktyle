<template>
<div class="flex min-h-screen items-center justify-center">
  <div class="w-64 rounded-lg border-2 border-orange-500 bg-transparent p-4 text-center shadow-lg dark:bg-blue-800">
    <figure class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 dark:bg-orange-600">
      <img src="@/assets/Images/team.jpg" alt="image equpe" class="rounded-lg">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-person-fill text-white dark:text-orange-300" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
      </svg> -->
      <figcaption class="sr-only">{{ member.name }}, {{ member.role }}</figcaption>
    </figure>
    <h2 class="mt-4 text-xl font-bold text-orange-600 dark:text-orange-400">{{ member.name }}</h2>
    <p class="mb-4 text-blue-600 dark:text-blue-300">{{ member.role }}</p>
    <div class="flex items-center justify-center">
      <a href="#" class="rounded-full bg-orange-600 px-4 py-2 text-white hover:bg-orange-700 dark:bg-orange-400 dark:hover:bg-orange-500">Contact</a>
      <a href="#" class="ml-4 rounded-full bg-blue-300 px-4 py-2 hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600">Portfolio</a>
    </div>
  </div>
</div>

 
  </template>
  
  <script>
  export default {
    props: {
      member: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>


  </style>
  
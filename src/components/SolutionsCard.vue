<template>
    <div class="card shadow-lg p-4 bg-white text-center">
      <i :class="icon" class="text-blue-500 text-3xl"></i>
      <h3 class="text-lg font-semibold mt-2 mb-3">{{ title }}</h3>
      <router-link :to="link" class="btn-secondary mt-4">En savoir plus</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      icon: String,
      title: String,
      link: String,
    },
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 10px;
  }
  .btn-secondary {
    background-color: #FF6F61;
    color: white;
    padding: 8px 16px;
    border-radius: 5px;
  }
  </style>
  
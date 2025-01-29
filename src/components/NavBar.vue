<template>
  <div class="navBar">
      <div class="w-full text-orange-700 bg-white dark-mode:text-orange-200 dark-mode:bg-orange-800">
        <div 
          style="border-radius: 0px 0px 25px 25px; margin-top: 0; margin-bottom: 20px; position: fixed; top: 0; left: 0;right: 0; width: 100%;"
          class="flex navLink flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          
          <div class="flex flex-row items-center justify-between p-4">
            <a href="#"
              class="text-lg font-semibold tracking-widest text-orange-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
              <img src="@/assets/Images/logo.jpg" alt="logo taktyl" width="20%">
            </a>
            <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="toggleMenu">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path v-if="!menuOpen" fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
                <path v-if="menuOpen" fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <nav :class="{ flex: menuOpen, hidden: !menuOpen }"
            class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <router-link v-for="route in routes" :key="route.name" :to="route.path" :class="[
              'px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-orange-900 focus:text-orange-900 focus:outline-none focus:shadow-outline',
              isActive(route.path) ? 'text-blue' : 'dark-mode:text-orange-200 dark-mode:hover:text-white'
            ]">
              {{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}
            </router-link>
          </nav>


        </div>
      </div>
  </div>
</template>

<script>

import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      menuOpen: false,
      routes: [
        {
          path: '/',
          name: 'Accueil',
        },
        {
          path: '/about',
          name: 'À Propos',
        },
        {
          path: '/solution',
          name: 'Nos Solutions',
        },
        {
          path: '/contact',
          name: 'Contact',
        },
      ],
    };
  },
  methods: {
    isActive(path) {
      const currentRoute = useRoute();
      return currentRoute.path === path;
    },
  },
};


</script>

<style>
@import "tailwindcss";

.navLink{
  background-color: #ffffff;
}
.navBar{
  margin-bottom: 85px;
}
</style>
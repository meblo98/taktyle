<template>
  <NavBar />
  <div class="max-w-screen-lg mt-5 mx-auto" style="margin-top:50vh;">
    <main class="mt-10">
      <div class="mb-4 md:mb-0 w-full mx-auto relative">
        <div class="px-4 lg:px-0">
          <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
            {{ blog.title }}
          </h2>
          <a href="#" class="py-2 text-4xl font-semibold inline-flex leading-tight items-center justify-center mb-2">
            {{ blog.title }}
          </a>
        </div>
        <img :src="blog.image ? 'http://127.0.0.1:8000/storage/' + blog.image : '@/assets/Images/images.png'" 
     alt="Image du blog" class="w-full object-cover lg:rounded" style="height: 28em;" />

      </div>
      <div class="flex flex-col lg:flex-row lg:space-x-12">
        <div class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
          <p class="pb-6">{{ blog.description }}</p>
        </div>
      </div>
    </main>
  </div>
  <Footer />
</template>

<script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      blog: {},
    };
  },
  mounted() {
    const blogId = this.$route.params.id; // Récupérer l'ID du blog dans l'URL
    axios.get(`http://127.0.0.1:8000/api/posts/${blogId}`)
  .then(response => {
    this.blog = response.data.data || response.data; // Vérifie la structure
    console.log('Blog récupéré:', this.blog);
  })
  .catch(error => {
    console.error('Erreur lors de la récupération du blog:', error);
  });

  },
};
</script>
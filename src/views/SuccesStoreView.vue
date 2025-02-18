<template>

<Navbar/>

<!-- Features Section -->
<section class="bg-white text-gray-900 mt-5 container mx-auto py-16 px-4 md:px-16">
  <!-- Heading -->
  <div class="text-center mb-12">
    <div class="container mx-auto">
        <div class="mb-5">
              <h1 class="text-3xl text-center font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Nos Success Stories</h1>

              <div class="mt-2 text-center">
                <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>       
      </div>
  </div>
  
  <!-- Feature Blocks -->

</section>




<Footer/>
</template>
<script>
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
export default {
 components: {
   Navbar,
   Footer
 }
}
</script>
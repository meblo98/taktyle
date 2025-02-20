<template>
       <NavBar />

  <div>
    <HeroSection
    class="mt-20 mb-0 py-0"
    />
    <section class="solutions py-10 bg-orange-100">
      <div class="container mx-auto">
        <div class="mb-5">
              <h1 class="text-3xl text-center font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Nos Solutions</h1>

              <div class="mt-2 text-center">
                <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>       
          <SolutionsCard
          link="/solution"
          />
      </div>
    </section>
    <section class="solutions py-10 bg-gray-100">
      <div class="container mx-auto">
        <div class="mb-5">
              <h1 class="text-3xl text-center font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Nos Success Stories</h1>

              <div class="mt-2 text-center">
                <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>
            <p class="row gx-4 justify-content-center font-monospace font-bold mb-5">Explorez ces success stories et inspirez-vous !</p>
          <SuccessCard
          link="/solution"
          />
      </div>
    </section>
    <!-- <section class="testimonials py-10">
      <div class="container mx-auto">
        <div class="mb-5">
              <h1 class="text-3xl text-center font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Ce Que Disent Nos Clients</h1>

              <div class="mt-2 text-center">
                <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>       
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          <TestimonialCard/>
        </div>
      </div>
    </section> -->
    <section class="cta text-center bg-white text-blue-500 py-10">
      <h2 class="text-2xl font-bold mb-5">Prêt à booster votre entreprise ?</h2>
      <router-link to="/contact" class="bg-blue-500 text-white py-3 px-4 rounded-full hover:bg-orange-600">Contactez-nous</router-link>
    </section>
    <section>
      <Partener/>
    </section>
  </div>
  <Footer/>

</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import SolutionsCard from '@/components/SolutionsCard.vue';
import TestimonialCard from '@/components/TestimonialCard.vue';
import Partener from '@/components/Partener.vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import SuccessCard from '@/components/SuccessCard.vue';

export default {
  components: {
    HeroSection,
    SolutionsCard,
    TestimonialCard,
    Partener,
    NavBar,
    Footer,
    SuccessCard,
  },
};
</script>

<template>
  <div>
    <HeroSection />
    <section class="solutions py-10 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-center text-2xl text-orange-500 font-bold mb-6">Nos Solutions</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
          <SolutionsCard 
            icon="fas fa-chart-line" 
            title="Suivez vos revenus et dépenses en temps réel." 
            link="/nos-solutions"
          />
          <SolutionsCard 
            icon="fas fa-file-invoice" 
            title="Simplifiez la gestion de vos factures." 
            link="/nos-solutions"
          />
          <SolutionsCard 
            icon="fas fa-users" 
            title="Améliorez vos relations clients avec notre CRM intégré." 
            link="/nos-solutions"
          />
          <SolutionsCard 
            icon="fas fa-users" 
            title="Améliorez vos relations clients avec notre CRM intégré." 
            link="/nos-solutions"
          />
        </div>
      </div>
    </section>
    <section class="testimonials py-10">
      <div class="container mx-auto">
        <h2 class="text-center text-2xl text-orange-500 font-bold mb-6">Ce Que Disent Nos Clients</h2>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          <TestimonialCard/>
        </div>
      </div>
    </section>
    <section class="cta text-center bg-white text-orange-500 py-10">
      <h2 class="text-2xl font-bold mb-5">Prêt à booster votre entreprise ?</h2>
      <router-link to="/contact" class="bg-orange-500 text-white py-4 px-12 rounded-full hover:bg-blue-600">Contactez-nous dès aujourd'hui !</router-link>
    </section>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import SolutionsCard from '@/components/SolutionsCard.vue';
import TestimonialCard from '@/components/TestimonialCard.vue';

export default {
  components: {
    HeroSection,
    SolutionsCard,
    TestimonialCard,
  },
};
</script>

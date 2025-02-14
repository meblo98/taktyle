<template>
       <NavBar />

  <div class="nos-solutions">
    <h2 class="text-center text-2xl text-blue font-bold mb-6">Nos Solutions</h2>
    <SolutionSection/>
  </div>
  <Footer/>

</template>

<script>
import SolutionSection from "@/components/SolutionSection.vue";
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    SolutionSection,
    NavBar,
    Footer,
  }
};
</script>

<style scoped>
.nos-solutions {
  text-align: center;
  padding: 20px;
}
</style>

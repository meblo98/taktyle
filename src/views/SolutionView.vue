<template>
  <div class="nos-solutions">
    <h2 class="text-center text-2xl text-blue font-bold mb-6">Nos Solutions</h2>
    <SolutionSection/>
  </div>
</template>

<script>
import SolutionSection from "@/components/SolutionSection.vue";

export default {
  components: {
    SolutionSection
  }
};
</script>

<style scoped>
.nos-solutions {
  text-align: center;
  padding: 20px;
}
</style>

<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="relative w-full max-w-xs border-2 rounded-lg p-6 flex flex-col gap-4 
             hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      :style="{ borderColor: card.color, backgroundColor: card.bgColor }"
    >
      <!-- Icône -->
      <i :class="card.icon" class="text-4xl" :style="{ color: card.color }"></i>

      <!-- Contenu -->
      <div class="relative z-10 space-y-3">
        <h1 class="text-xl font-bold" :style="{ color: card.color }">
          {{ card.title }}
        </h1>
        <p class="text-sm leading-relaxed text-gray-700">
          {{ card.description }}
        </p>
      </div>

      <!-- Bouton -->
      <router-link
      to="solution"
        class="w-full px-4 py-2 border rounded-full flex justify-center items-center gap-2
               hover:shadow-md transition-all duration-300"
        :style="{ borderColor: card.color, backgroundColor: card.buttonBg, color: card.color }"
      >
        <p class="font-medium">En savoir plus</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          icon: "fas fa-lightbulb",
          title: "Innovation",
          description: "Découvrez les dernières tendances technologiques.",
          color: "#FF6F61", // Orange
          bgColor: "#FFF3F0", // Fond clair
          buttonBg: "#FF6F6130", // 20% opacité
        },
        {
          icon: "fas fa-code",
          title: "Développement",
          description: "Explorez le monde du développement web et logiciel.",
          color: "#0056B3", // Bleu
          bgColor: "#E0F2FF", // Fond clair
          buttonBg: "#0056B330",
        },
        {
          icon: "fas fa-chart-line",
          title: "Stratégie",
          description: "Boostez votre productivité et vos compétences.",
          color: "#FF6F61",
          bgColor: "#FFF3F0",
          buttonBg: "#FF6F6130",
        },
        {
          icon: "fas fa-bullhorn",
          title: "Marketing",
          description: "Stratégies innovantes pour votre entreprise.",
          color: "#0056B3", // Bleu
          bgColor: "#E0F2FF", // Fond clair
          buttonBg: "#0056B330",
        },
      ],
    };
  },
};
</script>

<style scoped>
button:hover {
  transform: scale(1.05);
}
</style>

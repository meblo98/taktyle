<template>
  <div
    class="relative w-full max-w-sm border-2 rounded-[1.5em] p-6 flex flex-col gap-4 
           backdrop-blur-[12px] hover:shadow-2xl transition-all duration-500 
           group/card hover:-translate-y-1"
    :style="{
      borderColor: borderColor,
    }"
  >
    <!-- Effets de survol -->
    <div
      class="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[1.5em]"
    ></div>

    <!-- Icone -->
    <i :class="icon" class="text-4xl" :style="{ color: textColor }"></i>

    <!-- Contenu -->
    <div class="relative z-10 space-y-3">
      <h1 class="text-xl font-bold" :style="{ color: textColor }">
        {{ title }}
      </h1>
      <p class="text-sm leading-relaxed" :style="{ color: textColorLight }">
        {{ description }}
      </p>
    </div>

    <!-- Bouton -->
    <router-link :to="link"
      class="relative w-full px-4 py-2 border rounded-full flex justify-center items-center gap-2
             hover:shadow-lg transition-all duration-300 backdrop-blur-[12px]"
      :style="{ borderColor: borderColor, background: buttonBg, color: textColor }"
    >
      <p class="font-medium tracking-wide">En savoir plus</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    icon: {
      type: String,
      default: 'fas fa-lightbulb', // Icône FontAwesome par défaut
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    primaryColor: {
      type: String,
      default: '#FF6F61', // Orange principal par défaut
    },
    secondaryColor: {
      type: String,
      default: '#0056b3', // Bleu secondaire par défaut
    },
  },
  computed: {
    textColor() {
      return this.primaryColor;
    },
    textColorLight() {
      return this.secondaryColor + '99'; // Version plus transparente
    },
    borderColor() {
      return this.primaryColor + '80'; // 50% d'opacité
    },
    buttonBg() {
      return `${this.primaryColor}20`; // 20% d'opacité
    },
  },
};
</script>

<style scoped>
button:hover {
  transform: scale(1.05);
}
</style>
<!-- <script setup>
import 'vue3-carousel/carousel.css';
import { ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const cards = ref([
  { id: 1, name: "John Doe", message: "Lorem ipsum dolor sit amet..." },
  { id: 2, name: "Jane Doe", message: "Deserunt voluptatem alias..." },
  { id: 3, name: "Alice Brown", message: "Sapiente repellendus..." },
  { id: 4, name: "Bob Smith", message: "Dolores quasi excepturi..." },
  { id: 5, name: "Charlie Johnson", message: "Voluptatibus doloremque..." },
]);

const carouselConfig = {
  wrapAround: true,
  breakpoints: {
    0: { itemsToShow: 1 }, // Mobile
    600: { itemsToShow: 2 }, // Tablette
    1024: { itemsToShow: 3 }, // Desktop
  },
};
</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="card in cards" :key="card.id">
      <div class="card mb-9">
        <div class="header">
          <div class="image"></div>
          <div>
            <div class="stars">
              <svg v-for="n in 5" :key="n" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
            </div>
            <p class="name">{{ card.name }}</p>
          </div>
        </div>
        <p class="message">{{ card.message }}</p>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped>
.card {
  background-color: rgba(243, 244, 246, 1);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 20px 30px -20px rgba(5, 5, 5, 0.24);
  text-align: center;
}

.header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.image {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: royalblue;
}

.stars {
  display: flex;
  gap: 0.125rem;
  color: rgba(34, 197, 94, 1);
}

.stars svg {
  height: 1rem;
  width: 1rem;
}

.name {
  font-size: 1.125rem;
  font-weight: 600;
  color: rgba(55, 65, 81, 1);
}

.message {
  margin-top: 1rem;
  color: rgba(107, 114, 128, 1);
}
</style> -->

<template>
  <div class="relative w-full flex overflow-hidden shadow-2xl">
    <!-- Compteur -->
    <div class="absolute top-5 right-5 bg-gray-600 text-white text-sm px-2 rounded-full z-10">
      {{ currentIndex + 1 }} / {{ images.length }}
    </div>

    <!-- Images et captions -->
    <div class="relative w-full h-96">
      <img
        :src="images[currentIndex].src"
        alt="Image"
        class="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-500"
      />
      <figcaption
        class="absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-light text-sm text-center bg-gray-300 bg-opacity-25"
      >
        {{ images[currentIndex].caption }}
      </figcaption>
    </div>

    <!-- Bouton précédent -->
    <button @click="prevImage"
      class="absolute left-5 top-1/2 transform -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
      <svg class="w-8 h-8 text-gray-500 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>

    <!-- Bouton suivant -->
    <button @click="nextImage"
      class="absolute right-5 top-1/2 transform -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
      <svg class="w-8 h-8 text-gray-500 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Importation des images localement
import img1 from "@/assets/Images/hero-image0.jpg";
import img2 from "@/assets/Images/hero-image0.jpg";
import img3 from "@/assets/Images/hero-image0.jpg";
import img4 from "@/assets/Images/hero-image0.jpg";
import img5 from "@/assets/Images/hero-image0.jpg";

// Liste des images avec leurs légendes
const images = ref([
  { src: img1, caption: "Plage ensoleillée uiçh ) içgzd ihhà ihdb ) bus ji$ nhda qe  qnih dioenpqbfgl 🌞" },
  { src: img2, caption: "Un chat curieux 🐱" },
  { src: img3, caption: "Un chien fidèle 🐶" },
  { src: img4, caption: "Un magnifique paysage lore 🌄" },
  { src: img5, caption: "Textures et motifs artistiques 🎨" }
]);

const currentIndex = ref(0);
let interval = null;

// Fonction pour aller à l'image précédente
const prevImage = () => {
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : images.value.length - 1;
};

// Fonction pour aller à l'image suivante
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// Défilement automatique toutes les 3 secondes
onMounted(() => {
  interval = setInterval(nextImage, 3000);
});

// Nettoyage du timer quand le composant est détruit
onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
/* Ajoutez vos styles ici si nécessaire */
</style>

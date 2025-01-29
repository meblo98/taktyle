<script setup>
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
</style>

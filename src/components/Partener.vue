<template>
    <section class="client">
      <div class="container">
        <div class="row">
          <div class="mb-5">
            <h1 class="text-3xl text-center font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Nos Partenaires</h1>
  
            <div class="mt-2 text-center">
              <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
              <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
              <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
            </div>
          </div>
  
          <!-- Swiper Carousel -->
          <swiper
            :modules="[Autoplay, Pagination, Navigation]"
            :slides-per-view="3"
            :space-between="20"
            :loop="true"
            :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :pagination="{ clickable: true, el: '.swiper-pagination' }"
            :navigation="true"
            :breakpoints="{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }"
            class="carousel-client"
          >
            <swiper-slide v-for="(logo, index) in logos" :key="index">
              <img :src="logo" alt="Client logo" class="shadow-md" />
            </swiper-slide>
            <div class="swiper-pagination"></div>
          </swiper>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Autoplay, Pagination, Navigation } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        logos: [
          "/src/assets/Images/images.png",
          "/src/assets/Images/images.png",
          "/src/assets/Images/images.png",
          "/src/assets/Images/images.png",
          "/src/assets/Images/images.png",
          "/src/assets/Images/images.png",       
        ],
      };
    },
    setup() {
      return {
        Autoplay,
        Pagination,
        Navigation,
      };
    },
  };
  </script>
  
  <style scoped>
  .client {
    padding: 4em 0;
    background-color: #eee;
  }
  
  .carousel-client img {
    width: 100%;
    max-width: 200px;
    display: block;
    margin: auto;
  }
  
  .swiper-pagination {
    position: relative;
    bottom: -20px;
    text-align: center;
  }
  </style>
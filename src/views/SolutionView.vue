<template>
  <div
    class="bg-no-repeat bg-cover bg-center relative"
    style="background-image: url(https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80);"
  >
    <div class="absolute bg-gradient-to-r from-gray-900 to-gray-900 opacity-75 inset-0 z-0"></div>
    <div>
      <div class="min-h-screen flex justify-center">
        <div class="grid grid-cols-2 gap-4 items-center z-10">
          <div class="max-w-lg text-center sm:text-left">
            <h2 class="text-4xl font-bold text-gray-100 tracking-tight">
              A smile
              <br class="hidden sm:block lg:hidden" />
              is an inexpensive way to change your looks
            </h2>
            <p class="mt-4 text-gray-300">Goals are just dreams with deadline</p>
            <div class="flex flex-row items-center space-x-3 mt-5">
              <SocialIcon
                url="https://www.behance.net/ajeeshmon"
                bgColor="bg-blue-600"
                iconClass="w-4"
              />
              <SocialIcon
                url="https://codepen.io/uidesignhub"
                bgColor="bg-gray-900"
                iconClass="h-5"
              />
              <SocialIcon
                url="https://twitter.com/ajeemon?lang=en"
                bgColor="bg-blue-400"
                iconClass="w-3"
              />
            </div>
          </div>

          <!-- Swiper Section -->
          <div>
            <swiper-container
              class="mySwiper"
              :slides-per-view="1"
              :space-between="30"
              :pagination="{ clickable: true }"
              loop
            >
              <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
                <div class="p-8 bg-white shadow-lg rounded-lg">
                  <p class="text-gray-800 text-lg">{{ testimonial.text }}</p>
                  <h3 class="text-gray-900 font-bold mt-4">{{ testimonial.author }}</h3>
                  <p class="text-gray-600">{{ testimonial.role }}</p>
                </div>
              </swiper-slide>
            </swiper-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.css';
import { Swiper as SwiperClass, Pagination } from 'swiper';
import { register } from 'swiper/element/bundle';

register();

export default {
  data() {
    return {
      testimonials: [
        {
          text: 'This is the best service I have ever used!',
          author: 'John Doe',
          role: 'Web Developer',
        },
        {
          text: 'Absolutely amazing experience!',
          author: 'Jane Smith',
          role: 'Graphic Designer',
        },
        {
          text: 'Highly recommend to everyone.',
          author: 'Sarah Lee',
          role: 'Photographer',
        },
      ],
    };
  },
  components: {
    SocialIcon: {
      props: {
        url: { type: String, required: true },
        bgColor: { type: String, required: true },
        iconClass: { type: String, required: true },
      },
      template: `
        <a
          :href="url"
          target="_blank"
          class="w-10 h-10 flex items-center justify-center inline-flex rounded-2xl font-bold text-lg text-white"
          :class="bgColor"
        >
          <slot>
            <svg class="iconClass" xmlns="http://www.w3.org/2000/svg"></svg>
          </slot>
        </a>
      `,
    },
  },
};
</script>

<style>
.swiper-pagination {
  bottom: 0;
  position: relative;
}
.swiper-pagination-bullet {
  background-color: rgb(14, 211, 207);
}
.swiper-pagination-bullet-active {
  background-color: rgb(14, 211, 207);
}
</style>

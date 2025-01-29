<template>
<h1>nos solutions</h1>
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

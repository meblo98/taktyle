<template>
  <section id="gallery">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Nos Partenaires</h1>

      <div class="mt-2">
        <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
        <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
        <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
      </div>
    </div>
    <div class="container">
      <div id="image-gallery">
        <div class="row">
          <div v-for="(image, index) in images" :key="index" class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
            <div class="img-wrapper" @mouseenter="showOverlay(index)" @mouseleave="hideOverlay(index)">
              <a href="" @click.prevent="openLightbox(index)">
                <img :src="image" class="img-responsive" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="overlay" v-if="lightboxVisible" @click="closeLightbox">
      <img :src="images[currentIndex]" />
      <div id="prevButton" @click.stop="prevImage"><i class="fa fa-chevron-left"></i></div>
      <div id="nextButton" @click.stop="nextImage"><i class="fa fa-chevron-right"></i></div>
      <div id="exitButton" @click.stop="closeLightbox"><i class="fa fa-times"></i></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        new URL('@/assets/Images/images.png', import.meta.url).href,
        new URL('@/assets/Images/logo.jpg', import.meta.url).href,
        new URL('@/assets/Images/images.png', import.meta.url).href,
        new URL('@/assets/Images/logo.jpg', import.meta.url).href,
        new URL('@/assets/Images/images.png', import.meta.url).href,
        new URL('@/assets/Images/logo.jpg', import.meta.url).href,
        new URL('@/assets/Images/images.png', import.meta.url).href,
        new URL('@/assets/Images/logo.jpg', import.meta.url).href,
      ],

      overlayIndex: null,
      lightboxVisible: false,
      currentIndex: 0
    };
  },
  methods: {
    showOverlay(index) {
      this.overlayIndex = index;
    },
    hideOverlay() {
      this.overlayIndex = null;
    },
    openLightbox(index) {
      this.currentIndex = index;
      this.lightboxVisible = true;
    },
    closeLightbox() {
      this.lightboxVisible = false;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
};
</script>

<style>
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

#overlay img {
  max-width: 80%;
  max-height: 80%;
}

#prevButton,
#nextButton,
#exitButton {
  position: absolute;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

#prevButton {
  left: 10px;
}

#nextButton {
  right: 10px;
}

#exitButton {
  top: 10px;
  right: 10px;
}
</style>

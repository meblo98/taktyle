<template>
       <NavBar />

    <div class="card"
     style="margin-top:20vh;margin-bottom:10vh;"
    >
    <CardBlog/>
    </div>
    <Footer/>

</template>
<script>
import CardBlog from '@/components/CardBlog.vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'BlogView',
  components: {
    CardBlog,
    NavBar,
    Footer,
  },

};
</script>
<template>
    <div class="card"
     style="margin-top:20vh;margin-bottom:10vh;"
    >
    <CardBlog/>
    </div>
    
</template>
<script>
import CardBlog from '@/components/CardBlog.vue';

export default {
  name: 'BlogView',
  components: {
    CardBlog // Déclarer le composant
  },

};
</script>
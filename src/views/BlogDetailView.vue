<template>
     <NavBar />
    <!-- <div class="blog-detail">
        <h1>{{ blog.title }}</h1>
        <img :src="'http://127.0.0.1:8000/storage//' + blog.image" alt="Image du blog" />
        <p>{{ blog.description }}</p>
    </div> -->
    <div class="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
		<div class="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img :src="'http://127.0.0.1:8000/storage//' + blog.image" alt="Image du blog" />
			<div class="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
				<div class="space-y-2">
					<a rel="noopener noreferrer" href="#" class="inline-block text-2xl font-semibold sm:text-3xl">        <h1>{{ blog.title }}</h1>
                    </a>
					<p class="text-xs dark:text-gray-600">By
						<a rel="noopener noreferrer" href="#" class="text-xs hover:underline">Leroy Jenkins</a>
					</p>
				</div>
				<div class="dark:text-gray-800">
					<p>{{ blog.description }}</p>
				</div>
			</div>
		</div>
	</div>
    <Footer/>
</template>

<script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
    components: {
    NavBar,
    Footer,
  },
    data() {
        return {
            blog: null,
        };
    },
    mounted() {
        const blogId = this.$route.params.id; // Récupérer l'ID du blog dans l'URL
        axios.get(`http://127.0.0.1:8000/api/posts/${blogId}`)
            .then(response => {
                this.blog = response.data;
                console.log('Blog récupéré:', this.blog);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération du blog:', error);
            });
    },
};
</script>
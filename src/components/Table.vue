<template>
  <div class="bg-gray-100">
    <!-- En-tête -->
    <div class="header my-3 h-12 px-10 flex items-center justify-between">
      <h1 class="font-medium text-2xl">Tous les postes</h1>
    </div>

    <!-- Formulaire et tableau -->
    <div class="flex flex-col mx-3 mt-6 lg:flex-row">
      <!-- Formulaire d'ajout de poste -->
      <div class="w-full lg:w-1/3 m-1">
        <form @submit.prevent="addPost" class="w-full bg-white shadow-md p-6">
          <div class="flex flex-wrap -mx-3 mb-6">
            <!-- Champ Titre -->
            <div class="w-full md:w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="post-title">Titre
                poste</label>
              <input v-model="newPost.title"
                class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
                type="text" id="post-title" placeholder="Titre du poste" required />
              <p v-if="errors.title" class="text-red-600 text-sm">{{ errors.title[0] }}</p>

            </div>

            <!-- Champ Description -->
            <div class="w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                for="post-description">Description</label>
              <textarea v-model="newPost.description" rows="4"
                class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
                id="post-description" placeholder="Description du poste" required></textarea>
              <p v-if="errors.description" class="text-red-600 text-sm">{{ errors.description[0] }}</p>

            </div>

            <!-- Bouton Ajouter -->
            <div class="w-full md:w-full px-3 mb-6">
              <button type="submit"
                class="appearance-none block w-full bg-green-700 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-green-600 focus:outline-none focus:bg-white focus:border-gray-500">
                Ajouter un poste
              </button>
            </div>

            <!-- Champ Image -->
            <div class="w-full px-3 mb-8">
              <label
                class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center justify-center rounded-xl border-2 border-dashed border-green-400 bg-white p-6 text-center"
                for="post-image">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-800" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">Image Poste</h2>
                <p class="mt-2 text-gray-500 tracking-wide">Upload or drag & drop your file SVG, PNG, JPG or GIF.</p>
                <p v-if="errors.image" class="text-red-600 text-sm">{{ errors.image[0] }}</p>
                <input v-on:change="handleImageUpload" id="post-image" type="file" class="hidden"
                  accept="image/png, image/jpeg, image/webp" />
              </label>
            </div>
          </div>
        </form>
      </div>

      <!-- Tableau des postes -->
      <div class="w-full lg:w-2/3 m-1 bg-white shadow-lg text-lg rounded-sm border border-gray-200">
        <div class="overflow-x-auto rounded-lg p-3">
          <table class="table-auto w-full">
            <thead class="text-sm font-semibold uppercase text-gray-800 bg-gray-50 mx-auto">
              <tr>
                <th></th>
                <th><svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5 h-5 mx-auto">
                    <path
                      d="M6 22h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm7-18 5 5h-5V4zm-4.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 11zm.5 5 1.597 1.363L13 13l4 6H7l2-3z">
                    </path>
                  </svg></th>
                <th class="p-2">
                  <div class="font-semibold">Poste</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Description</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Boucle sur les postes -->
              <tr v-for="(post, index) in posts" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                  <img :src="'http://127.0.0.1:8000/storage//' + post.image || '../src/assets/Images/hero-image.jpg'"
                    class="h-8 w-8 mx-auto rounded-full" />
                </td>
                <td>{{ post.title }}</td>
                <td>{{ post.description }}</td>
                <td class="p-2">
                  <div class="flex justify-center">
                    <button @click="editPost(index)"
                      class="rounded-md hover:bg-green-100 text-green-600 p-2 flex justify-between items-center">
                      <span>Edit</span>
                    </button>
                    <button @click="deletePost(index)"
                      class="rounded-md hover:bg-red-100 text-red-600 p-2 flex justify-between items-center">
                      <span>Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';


export default {
  data() {
    return {
      newPost: {
        title: '',
        description: '',
        image: null,
      },
      posts: [],
      errors: {}, // Stocker les erreurs ici
    };
  },

  mounted() {
    this.fetchPosts(); // Charger les posts au montage
  },
  methods: {
    // Récupérer les posts depuis le backend
    async fetchPosts() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/posts', {
        });
        this.posts = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des postes :", error);
      }
    },

    // Gérer l'upload de l'image
    handleImageUpload(event) {
      this.newPost.image = event.target.files[0]; // Stocker directement le fichier
    },


    // Ajouter un poste avec le token
    async addPost() {
      const token = localStorage.getItem('token');
      if (!token) {
        Swal.fire("Erreur", "Vous devez être connecté pour ajouter un poste.", "error");
        return;
      }

      try {
        const formData = new FormData();
        formData.append('title', this.newPost.title);
        formData.append('description', this.newPost.description);
        if (this.newPost.image) {
          formData.append('image', this.newPost.image); // Ajout correct du fichier
        }

        const response = await axios.post('http://127.0.0.1:8000/api/posts', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        this.posts.push(response.data); // Ajouter le post à la liste
        this.newPost = { title: '', description: '', image: null }; // Réinitialiser le formulaire
        Swal.fire({
          icon: "success",
          title: "Succès",
          text: "Poste ajouté avec succès !",
          timer: 2000,
          showConfirmButton: false
        });
        this.errors = {}; // Réinitialiser les erreurs après succès
      } catch (error) {
        Swal.fire("Erreur", "Une erreur s'est produite lors de l'ajout du poste.", "error");
        if (error.response && error.response.status === 422) {
          this.errors = error.response.data.errors; // Stocker les erreurs de validation
        } else {
          console.error("Erreur lors de l'ajout du poste :", error);
        }
      }
    },


    // Supprimer un poste
    async deletePost(index) {
      const token = localStorage.getItem('token');
      const postId = this.posts[index].id;

      Swal.fire({
        title: "Êtes-vous sûr?",
        text: "Vous ne pourrez pas revenir en arrière !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Oui, supprimer !"
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/posts/${postId}`, {
              headers: { Authorization: `Bearer ${token}` },
            });

            this.posts.splice(index, 1);

            Swal.fire("Supprimé !", "Le poste a été supprimé.", "success");
          } catch (error) {
            console.error("Erreur lors de la suppression du poste :", error);
            Swal.fire("Erreur", "Une erreur est survenue lors de la suppression.", "error");
          }
        }
      });
    },

  },
};
</script>
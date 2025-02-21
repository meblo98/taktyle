<template>
  <!-- component -->
  <div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
    style="background-image:url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')">
    <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div class="text-white">
        <div class="mb-8 flex flex-col items-center">
          <img src="@/assets/Images/logo.svg" width="150" alt="" srcset="" />
          <h1 class="mb-2 text-2xl"></h1>
          <span class="text-gray-300 mt-5">Saisir les données de connexion</span>
        </div>
        <form class="form" @submit.prevent="submitForm">
          <div class="mb-4 text-lg">
            <input
              class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 text-warning px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="text" name="email" id="email" v-model="form.email" placeholder="id@email.com" />
          </div>

          <div class="mb-4 text-lg">
            <input
              class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 text-warning px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="Password" name="password" id="password" v-model="form.password" placeholder="*********" />
          </div>
          <div class="mt-8 flex justify-center text-lg text-black">
            <button type="submit"
              class="rounded-3xl bg-warning bg-opacity-50 px-5 rounded-full py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
          </div>
        </form>
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
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async submitForm() {

      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', this.form);

        // Vérifier si l'authentification est réussie
        if (response.data.token) {
          localStorage.setItem('token', response.data.token); // Stocker le token
          Swal.fire({
            icon: 'success',
            title: 'Connexion réussie',
            text: 'Bienvenue !',
            timer: 1500,
            showConfirmButton: false
          });
          // Rediriger vers une autre page (ex: tableau de bord)
          this.$router.push('/admin');
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Erreur de connexion',
          text: 'Email ou mot de passe incorrect',
        });
      }
    }
  }
};
</script>

<style lang="css" scoped></style>
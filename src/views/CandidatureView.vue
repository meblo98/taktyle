<template>
     <NavBar />

    <section class="h-screen flex items-center justify-center bg-cover bg-center" style="background-image: url('@/assets/Images/hero-image.jpg'); margin-top: 10vh;">
      <div class="max-w-md w-full p-8 rounded-lg shadow-md glass-bg">
        <h1 class="font-bold mb-5">Postuler pour une candidature spontannée</h1>
        <form @submit.prevent="submitForm">
          <!-- Nom complet -->
          <div class="mb-6">
            <div class="inputGroup">
              <input v-model="form.nom" name="nom" id="nom" type="text" required class="w-full" autocomplete="off" />
              <label>Nom complet</label>
            </div>
            <p v-if="errors.nom" class="text-red-500 text-sm mt-1">{{ errors.nom }}</p>
          </div>
  
          <!-- Poste -->
          <div class="mb-6">
            <div class="inputGroup">
              <input v-model="form.poste" name="poste" id="poste" type="text" required class="w-full" autocomplete="off" />
              <label>Poste</label>
            </div>
            <p v-if="errors.poste" class="text-red-500 text-sm mt-1">{{ errors.poste }}</p>
          </div>
  
          <!-- Upload CV -->
          <div class="mb-6">
            <div class="relative border-2 rounded-md px-4 py-3 bg-white flex items-center hover:border-blue-500 transition duration-150 ease-in-out">
              <input type="file" @change="handleFileUpload" name="cv" id="cv" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" />
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span class="ml-2 text-sm text-gray-600">Upload ton CV</span>
              </div>
            </div>
            <p v-if="errors.cv" class="text-red-500 text-sm mt-1">{{ errors.cv }}</p>
  
            <!-- Affichage du CV -->
            <div v-if="form.cv" class="mt-3 flex items-center space-x-2">
              <p class="text-sm text-green-600">{{ form.cv.name }}</p>
              <button @click="removeFile" type="button" class="text-red-500 text-xs">Supprimer</button>
            </div>
          </div>
  
          <!-- Bouton d'envoi -->
          <div class="flex items-center justify-between">
            <button type="submit" :disabled="!formValid" class="flex items-center bg-blue hover:bg-blue text-white py-2 px-4 rounded-md transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
              Postuler
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="#fff" class="ml-2">
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
    <Footer/>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  import NavBar from '@/components/NavBar.vue';
    import Footer from '@/components/Footer.vue';


  export default {
    components: {
        NavBar,
        Footer,
  },
    data() {
      return {
        form: {
          nom: '',
          poste: '',
          cv: null,
        },
        errors: {
          nom: '',
          poste: '',
          cv: '',
        },
      };
    },
    computed: {
      formValid() {
        return this.form.nom && this.form.poste && this.form.cv;
      },
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
          if (!allowedTypes.includes(file.type)) {
            this.errors.cv = 'Seuls les fichiers PDF ou Word sont acceptés.';
            this.form.cv = null;
          } else {
            this.errors.cv = '';
            this.form.cv = file;
          }
        }
      },
      removeFile() {
        this.form.cv = null;
        this.errors.cv = 'Le CV est obligatoire.';
      },
      validateForm() {
        this.errors.nom = this.form.nom ? '' : 'Le nom est obligatoire.';
        this.errors.poste = this.form.poste ? '' : 'Le poste est obligatoire.';
        this.errors.cv = this.form.cv ? '' : 'Le CV est obligatoire.';
        return this.formValid;
      },
      async submitForm() {
        if (!this.validateForm()) return;
  
        const formData = new FormData();
        formData.append('nom_complet', this.form.nom);
        formData.append('poste', this.form.poste);
        formData.append('cv', this.form.cv);
  
        try {
          await axios.post('http://127.0.0.1:8000/api/candidature', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Votre candidature a été envoyée avec succès !",
            showConfirmButton: false,
            timer: 1500
          });
  
          // Réinitialisation du formulaire
          this.form.nom = '';
          this.form.poste = '';
          this.form.cv = null;
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Une erreur est survenue lors de l'envoi !",
          });
        }
      },
    },
  };
  </script>
  
  <style>
  .glass-bg {
    background: rgba(255, 255, 255, 0.53);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  .inputGroup {
    position: relative;
  }
  .inputGroup input {
    padding: 0.8em;
    border: 2px solid rgba(119, 117, 117, 0.66);
    background: transparent;
    border-radius: 20px;
    width: 100%;
    outline: none;
    color: gray;
  }
  .inputGroup label {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: gray;
    transition: all 0.3s;
  }
  .inputGroup input:focus + label,
  .inputGroup input:valid + label {
    top: 0;
    font-size: 0.8em;
    background: rgb(255, 255, 255);
    padding: 0 5px;
    border-radius: 5px;
  }
  </style>
  
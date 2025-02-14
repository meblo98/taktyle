<template>
    <div class="container h-screen flex items-center justify-center bg-cover bg-center">
        <form class="form" @submit.prevent="submitForm">
            <span class="input-span">
                <label for="email" class="label">Email</label>
                <input type="email" name="email" id="email" v-model="form.email" required/>
            </span>
            <span class="input-span">
                <label for="password" class="label">Mot de passe</label>
                <input type="password" name="password" id="password" v-model="form.password" required/>
            </span>
            <input class="submit" type="submit" value="Se connecter" />
        </form>
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
            console.log(this.form);
            
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

<style lang="css">
.form {
  --bg-light:rgb(255, 188, 2);
  --bg-dark:rgb(0, 68, 255);
  --clr:rgb(255, 145, 0);
  --clr-alpha:rgba(255, 255, 255, 0.38);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
}

.form .input-span {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form input[type="email"],
.form input[type="password"] {
  border-radius: 0.5rem;
  padding: 1rem 0.75rem;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--clr-alpha);
  outline: 2px solid var(--bg-dark);
}

.form input[type="email"]:focus,
.form input[type="password"]:focus {
  outline: 2px solid var(--clr);
}

.label {
  align-self: flex-start;
  color: var(--clr);
  font-weight: 600;
}

.form .submit {
  padding: 1rem 0.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 3rem;
  background-color: var(--bg-dark);
  color: var(--bg-light);
  border: none;
  cursor: pointer;
  transition: all 300ms;
  font-weight: 600;
  font-size: 0.9rem;
}

.form .submit:hover {
  background-color: var(--clr);
  color: var(--bg-dark);
}

.span {
  text-decoration: none;
  color: var(--bg-dark);
}

.span a {
  color: var(--clr);
}

</style>
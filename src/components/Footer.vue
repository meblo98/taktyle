<template>
    <footer class="relativemt-5 pt-8 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl font-semibold text-orange-500">Restons en contact !</h4>
            <h5 class="text-lg mt-0 mb-2 text-orange-500">
              Trouvez-nous sur l'une de ces plateformes, nous vous répondons dans un délai de 1 à 2 jours ouvrables.
            </h5>
            <div class="mt-6 lg:mb-0 mb-6">
              <button
                class="bg-white text-lightorange-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button">
                <i class="fab fa-twitter"></i>
              </button>
              <button
                class="bg-white text-lightorange-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button">
                <i class="fab fa-facebook-square"></i>
              </button>
              <button
                class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button">
                <i class="fab fa-linkedin"></i>
              </button>
              <button
                class="bg-white text-orangeGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button">
                <i class="fab fa-instagram"></i>
              </button>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-orange-500 text-sm font-semibold mb-2">Liens utiles</span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-white hover:text-orange-800 font-semibold block pb-2 text-sm"
                      href="#">À propos de nous</a>
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-orange-800 font-semibold block pb-2 text-sm"
                      href="#">Blog</a>
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-orange-800 font-semibold block pb-2 text-sm"
                      href="#">Nos Solutions</a>
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-orange-800 font-semibold block pb-2 text-sm"
                      href="#">Notre Mission</a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-orange-500 text-sm font-semibold mb-2">Autres ressources</span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-white hover:text-orange-800 font-semibold block pb-2 text-sm"
                      href="#">MIT License</a>
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-orange-800 font-semibold block pb-2 text-sm"
                      href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-orange-800 font-semibold block pb-2 text-sm"
                      href="#">Politique de confidentialité</a>
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-orange-800 font-semibold block pb-2 text-sm"
                      href="#">Nous contacter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-white">
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-orange-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2025 </span>
              <a href="#" class="text-orange-500 hover:text-gray-800"
                 target="_blank">Taktyl
                <a href="#" class="text-orange-500 hover:text-orange-800"> group</a>.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
  @import "https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css";
  @import "https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";

  footer{
  background-color: #2A424D;
  }
  </style>
  
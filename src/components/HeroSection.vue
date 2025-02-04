<!-- <template>
<div class="bg-gray-50 flex items-center">
	<section class="hero w-full bg-cover bg-center py-32">
		<div class="container mx-auto text-center text-white">
			<h1 class="text-5xl text-orange font-medium mb-6">Boostez votre entreprise avec des outils digitaux modernes.</h1>
			<p class="text-xl text-orange mb-12">Des solutions adaptées aux PME en Afrique de l'Ouest.</p>
			<router-link to="/nos-solutions" class="bg-blue-500 text-white py-4 px-12 rounded-full hover:bg-orange-600">Découvrez nos solutions</router-link>
		</div>
	</section>
</div>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
  };
  </script>
  
  <style scoped>
  .hero {
    background: url('@/assets/Images/hero-image.jpg') no-repeat center center/cover;
  }
  .btn-primary {
    background-color: #ff9900;
    width: 100%;
    margin-top: 20px;
    color: white;
    border-radius: 5px;
  }
  </style>
   -->

   <template>
    
    <section
      class="relative bg-[url('@/assets/Images/hero-image.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div
        class="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>
    
      <div
        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 class="text-3xl text-blue font-extrabold sm:text-5xl">
            Boostez votre entreprise avec des outils digitaux modernes
    
            <strong class="block font-extrabold text-orange-700">Des solutions adaptées aux PME en Afrique de l'Ouest. </strong>
          </h1>

          <div class="mt-8 flex flex-wrap gap-4 text-center lg:flex-row lg:justify-center">
           <div class="button1">
            <router-link
              to="/solution"
              class="block w-full rounded-full rounded-sm bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:ring-3 focus:outline-hidden sm:w-auto"
            >
            Découvrez nos solutions
            </router-link>
           </div>
    
            <div class="button1">
              <router-link
              to="/contact"
              class="block w-full rounded-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-sm hover:text-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
            >
              Contactez-nous
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
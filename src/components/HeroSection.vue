<template>
<div class="bg-gray-50 flex items-center">
	<section class="hero w-full bg-cover bg-center py-32">
		<div class="container mx-auto text-center text-white">
			<h1 class="text-5xl font-medium mb-6">Boostez votre entreprise avec des outils digitaux modernes.</h1>
			<p class="text-xl mb-12">Des solutions adaptées aux PME en Afrique de l'Ouest.</p>
			<router-link to="/nos-solutions" class="bg-blue-500 text-white py-4 px-12 rounded-full hover:bg-blue-600">Découvrez nos solutions</router-link>
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
    background-color: #007BFF;
    width: 100%;
    margin-top: 20px;
    /* padding: 10px 20px; */
    color: white;
    border-radius: 5px;
  }
  </style>
  
<template>
	     <NavBar />

	<div
    style="margin-top:15vh;margin-bottom:10vh; background-color: #A7BDBF;"
    class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-orange-100 dark:text-orange-800">
		<div class="flex flex-col justify-between">
			<div class="space-y-2">
				<div class="mb-5">
              <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Contactez-Nous !</h1>

              <div class="mt-2">
                <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>
				<div class="dark:text-orange-600 mt-2">
                    <div class="flex items-center mb-3">
                        <i class="fa-solid fa-location-dot text-blue text-xl mr-2"></i>
                        <span>4 cité Cpi, VDN Dakar</span>
                    </div>
                    <div class="flex items-center mb-3">
                        <i class="fa-solid fa-phone text-blue text-xl mr-2"></i>
                        <span>+221 77 123 45 67</span>
                    </div>
                    <div class="flex items-center mb-3">
                        <i class="fa-solid fa-envelope text-blue text-xl mr-2"></i>
                        <span>contact@taktylgroup.com</span>
                    </div>    
                </div>
			</div>
			<img src="@/assets/Images/image page contact.png" alt="" class="p-6 h-52 md:h-64">
		</div>
		<form class="space-y-6">
			<div>
				<label for="name" class="text-sm">Nom complet</label>
				<input id="name" type="text" placeholder="" class="w-full p-3 rounded dark:bg-gray-100">
			</div>
			<div>
				<label for="email" class="text-sm">Email</label>
				<input id="email" type="email" class="w-full p-3 rounded dark:bg-gray-100">
			</div>
            <div>
				<label for="objet" class="text-sm">Objet</label>
				<input id="objet" type="objet" class="w-full p-3 rounded dark:bg-gray-100">
			</div>
			<div>
				<label for="message" class="text-sm">Message</label>
				<textarea id="message" rows="3" class="w-full p-3 rounded dark:bg-gray-100"></textarea>
			</div>
			<button type="submit" class="w-full p-3 text-sm font-bold tracking-wide bg-blue uppercase rounded dark:bg-white text-white rounded-full rounded-sm dark:text-white-50">Envoyer</button>
		</form>
	</div>
	<Footer/>

</template>

<script>
	  import NavBar from '@/components/NavBar.vue';
	  import Footer from '@/components/Footer.vue';
	  export default {
  components: {
    NavBar,
    Footer,
  }
};
</script>
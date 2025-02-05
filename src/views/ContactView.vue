<template>
	<div
    style="margin-top:15vh;"
    class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-orange-100 dark:text-orange-800">
		<div class="flex flex-col justify-between">
			<div class="space-y-2">
				<h2 class="text-4xl font-bold leading-tight lg:text-5xl">Contactez-Nous!</h2>
				<div class="dark:text-orange-600 mt-2">
                    <div class="flex items-center">
                        <i class="fa-solid fa-location-dot text-xl mr-2"></i>
                        <span>4 cité Cpi, VDN Dakar</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fa-solid fa-phone text-xl mr-2"></i>
                        <span>+221 77 123 45 67</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fa-solid fa-envelope text-xl mr-2"></i>
                        <span>contact@taktylgroup.com</span>
                    </div>    
                </div>
			</div>
			<img src="@/assets/Images/contact.svg" alt="" class="p-6 h-52 md:h-64">
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
</template>
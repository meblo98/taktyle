<!-- <template>
    
    <div class="hero mt-20 bg-white py-12">
        <div class="container mx-auto px-4">
            <div class="heading text-center text-blue">
                <h1 class="text-3xl sm:text-4xl font-bold mb-6">Contactez-Nous</h1>
              
                <div
                    class="contact-icons text-blue-500 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
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

            <div class="form-portion text-white bg-blue-500 sm:w-[80%] w-[90%] mx-auto mt-8 rounded-xl shadow-lg">
                <form action="https://formspree.io/f/mwpvbkrl" method="POST" class="p-6">
                    <div class="flex flex-col md:flex-row gap-6">
                        <div class="flex flex-col w-full">
                            <label for="full-name" class="text-lg font-medium mb-2">Nom complet</label>
                            <input type="text" name="full-name" id="full-name" placeholder="Saisissez votre nom complet"
                                class="px-4 py-2 rounded-lg border text-gray-500 border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="email-id" class="text-lg font-medium mb-2">Email</label>
                            <input type="email" name="email-id" id="email-id"
                                placeholder="Saisissez votre adresse e-mail"
                                class="px-4 py-2 rounded-lg border text-gray-500 border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                        </div>
                    </div>

                    <div class="mt-6">
                        <label for="subject" class="text-lg font-medium mb-2">Objet</label>
                        <input type="text" name="subject" id="subject" placeholder="Mentionnez votre domaine d'intérêt"
                            class="w-full px-4 py-2 rounded-lg border text-gray-500 border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    </div>

                    <div class="mt-6">
                        <label for="message" class="text-lg font-medium mb-2">Message:</label>
                        <textarea name="message" id="message" rows="5" placeholder="Rédigez votre message"
                            class="w-full px-4 py-2 rounded-lg border text-gray-500 border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"></textarea>
                    </div>

                    <div class="mt-6 flex justify-center">
                        <button type="submit"
                            class="px-6 py-3 text-white bg-orange rounded-lg hover:bg-white hover:text-black hover:shadow-md transition">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>
<script></script> -->

<template>
	<div
    style="margin-top:15vh;"
    class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-blue-100 dark:text-blue-800">
		<div class="flex flex-col justify-between">
			<div class="space-y-2">
				<h2 class="text-4xl font-bold leading-tight lg:text-5xl">Contactez-Nous!</h2>
				<div class="dark:text-gray-600 mt-2">
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
				<label for="message" class="text-sm">Message</label>
				<textarea id="message" rows="3" class="w-full p-3 rounded dark:bg-gray-100"></textarea>
			</div>
			<button type="submit" class="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Envoyer</button>
		</form>
	</div>
</template>
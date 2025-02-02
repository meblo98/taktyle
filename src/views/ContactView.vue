<template>
    <!-- Contact Page -->
    <div class="hero mt-20 bg-white py-12">
        <div class="container mx-auto px-4">
            <!-- Heading Section -->
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

            <!-- Form Section -->
            <div class="form-portion text-white bg-blue-500 sm:w-[80%] w-[90%] mx-auto mt-8 rounded-xl shadow-lg">
                <form action="https://formspree.io/f/mwpvbkrl" method="POST" class="p-6">
                    <!-- Name and Email -->
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

                    <!-- Subject -->
                    <div class="mt-6">
                        <label for="subject" class="text-lg font-medium mb-2">Objet</label>
                        <input type="text" name="subject" id="subject" placeholder="Mentionnez votre domaine d'intérêt"
                            class="w-full px-4 py-2 rounded-lg border text-gray-500 border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    </div>

                    <!-- Message -->
                    <div class="mt-6">
                        <label for="message" class="text-lg font-medium mb-2">Message:</label>
                        <textarea name="message" id="message" rows="5" placeholder="Rédigez votre message"
                            class="w-full px-4 py-2 rounded-lg border text-gray-500 border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"></textarea>
                    </div>

                    <!-- Submit Button -->
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
<script></script>
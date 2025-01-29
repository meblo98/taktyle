<template>
    <!-- Contact Page -->
    <div class="hero bg-white py-12">
        <div class="container mx-auto px-4">
            <!-- Heading Section -->
            <div class="heading text-center text-blue">
                <h1 class="text-3xl sm:text-4xl font-bold mb-6">Contactez-Nous</h1>
                <div class="contact-icons text-blue-500 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
                    <div class="flex items-center">
                        <img src="https://img.icons8.com/material-sharp/24/marker.png" alt="Location" width="25"
                            height="25" class="mr-2" />
                        <span>4 cité Cpi, VDN Dakar</span>
                    </div>
                    <div class="flex items-center">
                        <img src="https://img.icons8.com/material-rounded/25/phone--v1.png" alt="Phone" width="25"
                            height="25" class="mr-2" />
                        <span>+221 77 123 45 67 </span>
                    </div>
                    <div class="flex items-center">
                        <img src="https://img.icons8.com/material-rounded/96/mail.png" alt="Mail" width="25" height="25"
                            class="mr-2" />
                        <span> contact@taktylgroup.com.</span>
                    </div>
                </div>
            </div>

            <!-- Form Section -->
            <div class="form-portion text-white bg-blue-500 sm:w-[80%] w-[90%] mx-auto mt-8 rounded-xl shadow-lg">
                <form class="p-6">
                    <!-- Name and Email -->
                    <div class="flex flex-col md:flex-row gap-6">
                        <div class="flex flex-col w-full">
                            <label for="full-name" class="text-lg font-medium mb-2">Nom complet</label>
                            <input type="text" name="full-name" id="full-name" placeholder="Saisissez votre nom complet"
                                class="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="email-id" class="text-lg font-medium mb-2">Email</label>
                            <input type="email" name="email-id" id="email-id" placeholder="Saisissez votre adresse e-mail"
                                class="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                        </div>
                    </div>

                    <!-- Subject -->
                    <div class="mt-6">
                        <label for="subject" class="text-lg font-medium mb-2">Objet</label>
                        <input type="text" name="subject" id="subject" placeholder="Mentionnez votre domaine d'intérêt"
                            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    </div>

                    <!-- Message -->
                    <div class="mt-6">
                        <label for="message" class="text-lg font-medium mb-2">Message:</label>
                        <textarea name="message" id="message" rows="5" placeholder="Rédigez votre messagee"
                            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"></textarea>
                    </div>

                    <!-- Submit Button -->
                    <div class="mt-6 flex justify-center">
                        <button type="submit"
                            class="px-6 py-3 text-white bg-blue rounded-lg hover:bg-white hover:text-black hover:shadow-md transition">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>
<script></script>
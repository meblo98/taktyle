<template>
       <NavBar />

  <div>
    <!-- Section Notre Mission -->

    <section class="bg-white text-gray-900 container mx-auto py-16 px-4 md:px-16" style="margin-top: 15vh;">

      <!-- Feature Blocks -->
      <div class="space-y-12">

        <!-- Verse Finder Feature (1st Row) -->
        <div class="flex flex-col md:flex-row items-center md:items-start md:justify-between">
          <!-- Text Block -->
          <div class="md:w-5/12"> <!-- Adjusted width to 5/12 -->
            <div>
              <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Notre Mission</h1>

              <div class="mt-2">
                <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>
            <p class="text-gray-600 mb-6 text-center md:text-left">
              Chez Taktyl labs, nous accompagnons les entreprises africaines dans leur digitalisation en leur offrant
              des solutions adaptées aux réalités locales. Nous simplifions leurs processus, renforçons leur
              compétitivité et les aidons à atteindre leurs objectifs grâce à des outils numériques performants et
              accessibles.
            </p>
          </div>

          <!-- Image Block -->
          <div class="md:w-5/12"> <!-- Adjusted width to 5/12 -->
            <div>
              <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Notre Vision</h1>

              <div class="mt-2">
                <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>
            <p class="text-gray-600 mb-6 text-center md:text-left">
              Nous visons à être un leader dans la transformation digitale des entreprises africaines, en offrant des
              solutions innovantes qui favorisent la croissance durable et l'inclusion dans un marché global. </p>
          </div>
        </div>

        <!-- <div class="flex flex-col md:flex-row-reverse items-center md:items-start md:justify-between">
   
      <div class="md:w-5/12">
        <h2 class="text-2xl font-bold mb-4">Notre Vision</h2>
        <p class="text-gray-600 mb-6 text-center md:text-left">
          Nous visons à être un leader dans la transformation digitale des entreprises africaines, en offrant des solutions innovantes qui favorisent la croissance durable et l'inclusion dans un marché global.        </p>
      </div>
      
     
      <div class="md:w-5/12 max-w-sm">
        <img class="rounded-md border-none" src="@/assets/Images/vision.svg" alt="Bible Trivia Image">
      </div>
    </div> -->
      </div>

    </section>

    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <div class="lg:flex lg:items-center">
          <div class="w-full space-y-12 lg:w-1/2 ">
            <div>
              <h1 class="text-3xl font-semibold text-gray-800 text-center capitalize lg:text-4xl dark:text-white">Nos Valeurs</h1>

              <div class="mt-2">
                <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>
            <p class="mb-5">Chez <span class="font-bold">Takty labs</span>, nos valeurs guident chaque projet et collaboration :</p>
            <div class="md:flex md:items-start md:-mx-4">
              <div class="mt-4 md:mx-4 md:mt-0">
                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">🚀 Innovation & Excellence </h1>
                <p class="mt-3 text-gray-500 dark:text-gray-300">
                  Nous créons des solutions technologiques de pointe pour anticiper les défis de demain.
                </p>
              </div>
              <div class="mt-4 md:mx-4 md:mt-0">
                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">🌍 Ambition & Vision</h1>
                <p class="mt-3 text-gray-500 dark:text-gray-300">
                  Nous bâtissons l’avenir numérique de l’Afrique avec des solutions pensées pour le long terme.
                </p>
              </div>
            </div>

            <div class="md:flex md:items-start md:-mx-4">
              <div class="mt-4 md:mx-4 md:mt-0">
                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">🤝 Collaboration & Esprit d’Équipe</h1>
                <p class="mt-3 text-gray-500 dark:text-gray-300">
                  Le travail en synergie est notre force, avec nos équipes, partenaires et clients.
                </p>
              </div>
              <div class="mt-4 md:mx-4 md:mt-0">
                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white"> 🔍 Transparence & Intégrité </h1>
                <p class="mt-3 text-gray-500 dark:text-gray-300">
                  Des pratiques éthiques et une communication claire pour des relations durables.
                </p>
              </div>
            </div>

            <div class="md:flex md:items-start md:-mx-4">
              <div class="mt-4 md:mx-4 md:mt-0">
                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">💡 Engagement & Impact</h1>
                <p class="mt-3 text-gray-500 dark:text-gray-300">
                  Nous développons des technologies accessibles et utiles pour un impact positif.
                </p>
              </div>
            </div>
          </div>

          <div class="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <img class="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem]"
              src="@/assets/Images/valeurs.jpg"
              alt="">
          </div>
        </div>

        <hr class="border-gray-200 my-12 dark:border-gray-700">

        <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">

        </div>
      </div>
    </section>
    <!-- Section Notre Équipe -->
    <section class="team">
      <div class="container items-center mx-auto px-4 text-center">
        <TeamCard />
      </div>
    </section>


  </div>
  <Footer/>

</template>

<script>
import TeamCard from '@/components/TeamCard.vue'; // Importer le composant
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'AboutPage',
  components: {
    TeamCard,
    NavBar,
    Footer,
  },

};
</script>

<style scoped></style>

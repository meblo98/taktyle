<template>
  <div>
    <!-- Section Notre Mission -->
    <section class="mission mt-20 bg-gray-100 py-12">

      <div class="items-center mt-15 flex flex-wrap">
        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img alt="..." class="max-w-full rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80">
        </div>
        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">

            <h3 class="text-3xl text-blue font-semibold">Notre Mission</h3>
            <p class="mt-4 text-lg leading-relaxed text-orange-500">
              Démocratiser l'utilisation des outils numériques pour les PME en Afrique de l'Ouest.
            </p>

          </div>
        </div>
      </div>

    </section>


    
    <section class="mission mt-20 bg-gray-100 py-12">

<div class="items-center mt-15 flex flex-wrap">
 
  <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
    <div class="md:pr-12">

      <h3 class="text-3xl text-blue font-semibold">Notre Objectif</h3>
      <p class="mt-4 text-lg leading-relaxed text-orange-500">
        Digitaliser les PME et les écoles en Afrique de l'Ouest grâce à des solutions SaaS abordables et adaptées.
      </p>

    </div>
  </div>
  <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
    <img alt="..." class="max-w-full rounded-lg shadow-lg"
      src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80">
  </div>
</div>

</section>


    <section class="mission mt-20 bg-gray-100 py-12">

      <div class="items-center mt-15 flex flex-wrap">

        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img alt="..." class="max-w-full rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80">
        </div>


        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">
            <h3 class="text-3xl text-blue font-semibold">Notre Quotidien</h3>
            <p class="mt-4 text-lg leading-relaxed text-orange-500">
              Nous concevons des solutions intelligentes et stratégiques pour accompagner les entreprises dans leur
              croissance et les aider à atteindre l'excellence opérationnelle au quotidien.

            </p>
          </div>

        </div>
      
      </div>

    </section>

    <!-- Section Notre Équipe -->
    <section class="team py-10">
      <div class="container items-center mx-auto px-4 text-center">
        <TeamCard />
      </div>
    </section>


  </div>
</template>

<script>
import TeamCard from '@/components/TeamCard.vue'; // Importer le composant

export default {
  name: 'AboutPage',
  components: {
    TeamCard // Déclarer le composant
  },

};
</script>

<style scoped></style>

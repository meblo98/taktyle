<template>
  <div>
    <!-- Section Notre Mission -->
    <section class="mission bg-gray-100 py-12">


      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img alt="..." class="max-w-full rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80">
        </div>
        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">
            <!-- <div
              class="text-orange-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300 mt-8">
              <i class="fas fa-rocket text-xl"></i>
            </div> -->
            <h3 class="text-3xl text-blue font-semibold">Notre Mission</h3>
            <p class="mt-4 text-lg leading-relaxed text-orange-500">
              Démocratiser l'utilisation des outils numériques pour les PME en Afrique de l'Ouest.
            </p>
            <!-- <ul class="list-none mt-6">
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-orange-200 mr-3"><i
                        class="fas fa-fingerprint"></i></span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">
                      Carefully crafted components
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                        class="fab fa-html5"></i></span>
                  </div>
                  <div>
                    <h4 class="text-blue-500">Notre Mission</h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i
                        class="far fa-paper-plane"></i></span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">Dynamic components</h4>
                  </div>
                </div>
              </li>
            </ul> -->
          </div>
        </div>
      </div>

    </section>

    <!-- Section Notre Équipe -->
    <section class="team py-10">
      <div class="container items-center mx-auto px-4 text-center">
        <h2 class="text-3xl font-semibold text-blue">Notre Équipe</h2>
           <TeamCard/>
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

<style scoped>


</style>

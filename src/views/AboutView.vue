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
            <div
              class="text-orange-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300 mt-8">
              <i class="fas fa-rocket text-xl"></i>
            </div>
            <h3 class="text-3xl font-semibold">A growing company</h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              The extension comes with three pre-built pages to help you get
              started faster. You can change the text and images and you're
              good to go.
            </p>
            <ul class="list-none mt-6">
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
                    <h4 class="text-blueGray-500">Amazing page examples</h4>
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
            </ul>
          </div>
        </div>
      </div>

    </section>

    <!-- Section Notre Équipe -->
    <section class="team py-12">
      <div class="container items-center mx-auto px-4 text-center">
        <h2 class="text-3xl font-semibold text-blue-900 mb-6">Notre Équipe</h2>
        <div class="equipe grid grid-cols-4 md:grid-cols-4 gap-6">
          <TeamCard v-for="(member, index) in people" :key="index" :member="member" />
        </div>

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
  data() {
    return {
      people: [
        {
          name: "Mouhamed Lo",
          role: "Développeur Web",
          image: new URL('@/assets/Images/team.jpg', import.meta.url).href,
        },
        {
          name: "Mouhamed Lo",
          role: "Développeur Web",
          image: new URL('@/assets/Images/team.jpg', import.meta.url).href,
        },
        {
          name: "Adama Dabo",
          role: "Designer UX/UI",
          image: new URL('@/assets/Images/team.jpg', import.meta.url).href,
        },
        {
          name: "Aissatou Diallo",
          role: "Chef de Projet",
          image: new URL('@/assets/Images/team.jpg', import.meta.url).href,
        },

      ],

    };
  }
};
</script>

<style scoped>
.card-client {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.team{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
.equipe{
  left: 0;
  right: 0;
}
</style>

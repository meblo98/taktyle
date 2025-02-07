   <template>

    <section class="relative bg-[url('@/assets/Images/hero-image.jpg')] bg-cover bg-center bg-no-repeat">
      <div
        class="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
      </div>
      <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 class="text-3xl text-orange sm:text-5xl">
            <strong class="block font-extrabold text-blue-700"> Boostez votre entreprise avec des outils digitaux
              modernes </strong>
            Des solutions adaptées aux PME en Afrique de l'Ouest.
          </h1>

          <div class="mt-8 flex flex-wrap gap-4 text-center lg:flex-row lg:justify-center">
            <div class="button1">
              <router-link to="/solution"
                class="block w-full rounded-full rounded-sm bg-orange-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-3 focus:outline-hidden sm:w-auto">
                Découvrez nos solutions
              </router-link>
            </div>

            <div class="button1">
              <router-link to="/contact"
                class="block w-full rounded-full rounded-sm bg-blue px-12 py-3 text-sm font-medium text-white shadow-sm hover:text-orange focus:ring-3 focus:outline-hidden sm:w-auto">
                Contactez-nous
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
<template>
    <div class="solution-section">

        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            
            <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="@/assets/Images/invoice-interface.jpeg" alt="glasses photo">
            </div>

            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="text-3xl font-bold tracking-wide text-blue dark:text-white lg:text-5xl">
                        Facturation Numérique
                    </h1>
                    
                    <div class="mt-8 space-y-5">
                        <p class="flex items-center mx-2 text-orange-700 dark:text-orange-500">
                             Générez et envoyez des factures en quelques clics
                        </p>

                    </div>
                </div>
            </div>
    
          
        </div>
        
    </div>
    <div class="solution-section">

<div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
    <div class="w-full lg:w-1/2">
        <div class="lg:max-w-lg">
            <h1 class="text-3xl font-bold tracking-wide text-blue dark:text-white lg:text-5xl">
                Suivi des Clients
            </h1>
            
            <div class="mt-8 space-y-5">
                <p class="flex items-center -mx-2 text-orange-700 dark:text-orange-500">
                    Gérez vos relations clients avec notre CRM intégré
                </p>

            </div>
        </div>
    </div>

    <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="@/assets/Images/crm.jpeg" alt="glasses photo">
    </div>
</div>

</div>
<div class="solution-section">

<div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
    
    <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="@/assets/Images/finance-dashboard.jpeg" alt="glasses photo">
    </div>

    <div class="w-full lg:w-1/2">
        <div class="lg:max-w-lg">
            <h1 class="text-3xl font-bold tracking-wide text-blue dark:text-white lg:text-5xl">
                Gestion Financière Simplifiée
            </h1>
            
            <div class="mt-8 space-y-5">
                <p class="flex items-center -mx-2 text-orange-700 dark:text-orange-500">
                    Suivez vos revenus, dépenses et profits en temps réel avec des outils intuitifs
                </p>

            </div>
        </div>
    </div>

    
</div>

</div>

  </template>
  
  <script>
  export default {
    // props: {
    //   title: String,
    //   description: String,
    //   image: String,
    //   icon: String
    // }
  };
  </script>
  
  <style scoped>
  .solution-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    border-bottom: 1px solid #ddd;
  }
  .text-content {
    max-width: 50%;
  }
  .image {
    max-width: 100%;
    height: auto;
  }
  .icon {
    font-size: 50px;
    color: #007bff;
  }
  </style>
  
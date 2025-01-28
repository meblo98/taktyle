<template>
    <div class="card-client">
      <div class="user-picture">
        <img :src="member.image" alt="Photo de l'équipe" />
      </div>
      <h3 class="name-client">{{ member.name }} <span>{{ member.role }}</span></h3>
      
    </div>
  </template>
  
  <script>
  export default {
    props: {
      member: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
 /* From Uiverse.io by abrahamcalsin */ 
.card-client {
  background: #007BFF;
  width: 13rem;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 20px;
  padding-right: 20px;
  border: 4px solid #007BFF;
  box-shadow: 0 6px 10px rgba(207, 212, 222, 1);
  border-radius: 10px;
  text-align: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;
}

.card-client:hover {
  transform: translateY(-10px);
}

.user-picture {
  overflow: hidden;
  object-fit: cover;
  width: 5rem;
  height: 5rem;
  border: 4px solid #FF6F61;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.user-picture svg {
  width: 2.5rem;
  fill: currentColor;
}

.name-client {
  margin: 0;
  margin-top: 20px;
  font-weight: 600;
  font-size: 18px;
}

.name-client span {
  display: block;
  font-weight: 200;
  font-size: 16px;
}


  </style>
  
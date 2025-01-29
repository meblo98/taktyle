<template>
  <div class="container">
    <div class="row d-flex flex-wrap justify-content-center g-4">
      <div v-for="(member, index) in teamMembers" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="our-team">
          <div class="picture">
            <img class="img-fluid" :src="getImageUrl(member.image)" :alt="member.name">
          </div>
          <div class="team-content">
            <h3 class="name text-white">{{ member.name }}</h3>
            <h4 class="title text-white">{{ member.role }}</h4>
          </div>
          <ul class="social">
            <li v-for="(link, i) in member.socials" :key="i">
              <a :href="link.url" :class="link.icon" target="_blank" rel="noopener noreferrer"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const images = import.meta.glob('@/assets/Images/*', { eager: true });

export default {
  data() {
    return {
      teamMembers: [
        { name: "Bachir LO", role: "Web Developer", image: "team.jpg", socials: socialLinks },
        { name: "Bachir LO", role: "Web Developer", image: "team.jpg", socials: socialLinks },
        { name: "Bachir LO", role: "Web Developer", image: "team.jpg", socials: socialLinks },
        { name: "Bachir LO", role: "Web Developer", image: "team.jpg", socials: socialLinks }
      ]
    };
  },
  methods: {
    getImageUrl(imageName) {
      return images[`/src/assets/Images/${imageName}`]?.default || "";
    }
  }
};

const socialLinks = [
  { icon: "fab fa-facebook-f", url: "https://facebook.com" },
  { icon: "fab fa-twitter", url: "https://twitter.com" },
  { icon: "fab fa-google-plus-g", url: "https://google.com" },
  { icon: "fab fa-linkedin-in", url: "https://linkedin.com" }
];


</script>

<style scoped>
.container {
  padding-top: 40px;
}

.our-team {
  padding: 30px 0 40px;
  margin-bottom: 30px;
  background-color: #2B7FFF;
  text-align: center;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.our-team .picture {
  display: inline-block;
  height: 130px;
  width: 130px;
  margin-bottom: 50px;
  z-index: 1;
  position: relative;
}

.our-team .picture::before {
  content: "";
  width: 100%;
  height: 0;
  border-radius: 50%;
  background-color: #CB3B07;
  position: absolute;
  bottom: 135%;
  right: 0;
  left: 0;
  opacity: 0.9;
  transform: scale(3);
  transition: all 0.3s linear 0s;
}

.our-team:hover .picture::before {
  height: 100%;
}

.our-team .picture::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #CB3B07;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.our-team .picture img {
  width: 100%;
  height: auto;
  border-radius: 100%;
  transform: scale(1);
  transition: all 0.9s ease 0s;
}

.our-team:hover .picture img {
  box-shadow: 0 0 0 14px #f7f5ec;
  transform: scale(0.7);
}

.our-team .title {
  display: block;
  font-size: 15px;
  color: #4e5052;
  text-transform: capitalize;
}

.our-team .social {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #CB3B07;
  position: absolute;
  bottom: -100px;
  left: 0;
  transition: all 0.5s ease 0s;
}

.our-team:hover .social {
  bottom: 0;
}

.our-team .social li {
  display: inline-block;
}

.our-team .social li a {
  display: block;
  padding: 10px;
  font-size: 17px;
  color: white;
  transition: all 0.3s ease 0s;
  text-decoration: none;
}

.our-team .social li a:hover {
  color: #2B7FFF;
  background-color: #f7f5ec;
}
</style>

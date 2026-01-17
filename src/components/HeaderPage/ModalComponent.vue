<template>
  <div id="carouselExampleIndicators" class="carousel slide carousel-container">
    <ol class="carousel-indicators">
      <li data-bs-target="#carouselExampleIndicators" v-for="(image, index) in images" :key="index"
        :data-bs-slide-to="index" :class="{ active: index === 0 }"></li>
    </ol>
    <div class="carousel-inner">
      <div v-for="(image, index) in images" :key="index" :class="['carousel-item', { active: index === 0 }]">
        <img :src="image.src" :alt="image.alt" class="carousel-image">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  data() {
    return {
      images: [
        {
          src: require("@/assets/imgs/carousel/carrousel_0.png"),
          alt: "Carousel Image 00",
        },
        {
          src: require("@/assets/imgs/carousel/carrousel_1.jpg"),
          alt: "Carousel Image 1",
        },
        {
          src: require("@/assets/imgs/carousel/carrousel_2.jpg"),
          alt: "Carousel Image 2",
        },
        {
          src: require("@/assets/imgs/carousel/carrousel_3.jpg"),
          alt: "Carousel Image 3",
        },
        {
          src: require("@/assets/imgs/carousel/carrousel_4.jpg"),
          alt: "Carousel Image 4",
        },
        {
          src: require("@/assets/imgs/carousel/carrousel_5.jpg"),
          alt: "Carousel Image 5",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Adjust the height of the carousel container */
.carousel-container {
  height: 40%;
  /* Set your desired height here */
  overflow: hidden;
}

/* Ensure the images fill the entire height of the carousel container */
.carousel-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
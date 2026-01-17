<template>
    <section class="gallery-section">
        <h2 class="section-title">Galeria de Fotos</h2>
        <div class="gallery">
            <!-- Substitua as URLs das imagens pelas URLs das suas próprias fotos -->
            <div v-for="x in 53" :key="x" class="gallery-item">
                <img v-if="`@/assets/imgs/galeria/00${x}.jpg`" :src="require(`@/assets/imgs/galeria/00${x}.jpg`)">
            </div>
        </div>

        <!-- Modal para visualizar a imagem em tamanho maior -->
        <div v-if="showModal" class="modal">
            <span class="close-modal" @click="closeModal">&times;</span>
            <img :src="images[activeImageIndex].url" :alt="images[activeImageIndex].alt">
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'PhotoGalerrySection'
};
</script>
  
<style scoped>
.gallery-section {
    padding: 40px;
}

.section-title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
}

.gallery-item img {
    width: 100%;
    height: auto;
    cursor: pointer;
}
</style>
  
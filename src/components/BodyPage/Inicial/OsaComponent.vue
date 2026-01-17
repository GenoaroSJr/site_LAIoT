<template>
    <div class="container">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm d-flex" style="background-color: black;">
            <div class="col-lg-3 d-flex align-items-center justify-content-center p-2">
                <img :src="require(`@/${img}`)" alt="OSA Image" style="width: 90%;">
            </div>
            <div class="col-lg-9 col-sm-12 p-4 d-flex flex-column position-static">
                <a href="https://www.optica.org/en-us/home/">
                    <h3>OPTICA</h3>
                </a>
                <p id="opticaTexto" class="pesquisa card-text mb-auto text-justify" style="color: white;">
                    UNIFEI - OPTICA Advancing Optics and Photonics Worldwide – é uma iniciativa da Sociedade Americana de Óptica (OPTICA) principal
                    associação
                    profissional em óptica e fotônica, e oferece aos estudantes universitários a oportunidade para
                    divulgação da
                    ciência, nos campos de óptica e fotônica, por meio do Capítulo de Estudantes. A disseminação do
                    conhecimento é
                    feito pelos membros do grupo através de eventos, palestras, visitas técnicas e interações das mais
                    variadas
                    formas com a sociedade e com o público estudantil do ensino médio e fundamental. Busca-se, assim, atrair
                    os
                    jovens estudantes de forma educativa a ingressarem nessa interessante do conhecimento.
                </p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'OsaComponent',
    data: () => ({
        img: 'assets/imgs/osa/optica.jpeg'
    })
};
</script>
  
<style>
/* Your custom styles for the component */
.col-lg-3 {
    /* Add spacing between the image and text columns */
    margin-bottom: 20px;
}</style>
  
<template>
    <div>
        <div class="p-4 p-md-5 mb-2 text-white rounded bg-dark">
            <div class="col-md-12 px-0">
                <h1 id="titulo" class="display-4 fst-italic">Grupo de Telecomunicações - UNIFEI</h1>
                <hr>
                <h2 id="subtitulo" class="fst-italic">LabTel & LaIoT</h2>
            </div>
        </div>
        <event-component v-if="evento" />
        <modal-component />
        <who-what-component />

        <div class="row align-items-center mb-2">
            <div class="col-md-12 col-lg-6 px-0" align="center">
                <img width="150" src="@/assets/imgs/RFID.jpg" alt="">
            </div>
            <div class="col-md-12 col-lg-6 px-0" align="center">
                <img width="150" src="@/assets/imgs/logolab.jpeg" alt="">
            </div>
        </div>

        <div class="container">
            <div class="row m-5 text-center">
                <h2 id="frase">Revelemo-nos mais por atos que por palavras ... </h2>
                <font face="Times">Theodomiro C. Santiago</font>
            </div>
        </div>

        <osa-component />

    </div>
</template>

<script>
import ModalComponent from '@/components/HeaderPage/ModalComponent';
import EventComponent from '@/components/BodyPage/Inicial/EventComponent';
import WhoWhatComponent from '@/components/BodyPage/Inicial/WhoWhatComponent';
import OsaComponent from '@/components/BodyPage/Inicial/OsaComponent';

export default {
    name: "InicialSection",
    data: () => ({
        evento: false
    }),
    components: {
        ModalComponent,
        EventComponent,
        WhoWhatComponent,
        OsaComponent
    }
}
</script>
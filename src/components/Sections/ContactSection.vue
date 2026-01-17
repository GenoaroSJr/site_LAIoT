<template>
    <div>
        <contact-header-component />
        <div class="row mb-2">
            <div class="col-12">
                <div class="row g-0 border rounded overflow-hidden mb-4 shadow-sm  position-relative">
                    <div class="col-auto d-none d-lg-block">
                        <img src="@/assets/imgs/SITE-INT-Portaria_Cleber-Gonçalves.jpg" alt="">
                    </div>
                    <div class="col p-4 d-flex flex-column position-static">
                        <!-- <strong class="d-inline-block mb-2 text-primary">LabIoT</strong> -->
                        <h3 id="detalhes" class="mb-2 text-left">Detalhes para contato</h3>
                        <p class="card-text mb-auto text-justify">Rua: Av. BPS, 1303 - Pinheirinho, Itajubá - MG,
                            37500-903</p>
                        <p class="card-text mb-auto text-justify">IESTI - Instituto de Engenharia de Sistemas e
                            Tecnologia
                            da Informação</p>
                        <p class="card-text mb-auto text-justify">Telefone: (+55) 35 3629-1101</p>
                        <p class="card-text mb-auto text-justify">E-mail: spadoti@unifei.edu.br</p>
                        <a
                            href="https://www.google.com.br/maps/place/Av.+B+P+S,+1303+-+Pinheirinho,+Itajub%C3%A1+-+MG,+37500-903/@-22.4106592,-45.4543126,17z/data=!3m1!4b1!4m5!3m4!1s0x94cb7b528b809871:0xd76b828bf96e6ff9!8m2!3d-22.4106592!4d-45.4521239">Google
                            Maps</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row m-5 text-center">
            <h2 id="frase">Aguardamos sua visita ... Até breve!! </h2>
        </div>
    </div>
</template>

<script>
import ContactHeaderComponent from '@/components/BodyPage/Headers/ContactHeaderComponent.vue'

export default {
    name: 'ContactSection',
    components: {
        ContactHeaderComponent
    }
}
</script>
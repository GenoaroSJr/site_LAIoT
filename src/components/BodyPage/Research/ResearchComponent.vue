<template>
    <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="require(`@/${dados.img}`)" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ dados.titulo }}</h5>
                        <p class="card-text">
                            {{ dados.texto }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'ResearchComponent',
    props: {
        dados: Object
    }
}
</script>
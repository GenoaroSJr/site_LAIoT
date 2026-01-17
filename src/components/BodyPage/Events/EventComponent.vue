<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <!-- <img src="..." class="img-fluid rounded-start" alt="..."> -->
            </div>
            <div class="col-md-7">
                <div class="card-body">
                    <h5 class="card-title">{{ dados.titulo }}</h5>
                    <p class="card-text">
                        {{ dados.resumo }}
                    </p>
                    <p class="card-text">
                        <small class="text-muted">{{ dados.data }} - {{ dados.local }}</small>
                    </p>
                </div>
            </div>

            <div class="col-md-1">
                <!-- <router-link :to="{ name: dados.alias }"> -->
                <router-link :to="{ name: 'Eventos' }">
                    <div class="card-body d-flex align-items-center justify-content-center h-100 card-icon">
                        <i class="bi bi-caret-right-fill"></i>
                    </div>
                </router-link>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    name: "EventComponent",
    props: {
        dados: Object
    }
};
</script>
  
<style scoped>
.card-title {
    color: blue;
}

.card-body {
    text-align: center;
}

.bi-caret-right-fill {
    /* Certifique-se de que o ícone não tenha margens para evitar desalinhamentos */
    margin: 0;
}
</style>
  
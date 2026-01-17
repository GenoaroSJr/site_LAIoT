<template>
    <div class="card border-primary mb-3">
        <div class="card-body">
            <p class="card-text">
                <span v-if="dados.autores"> {{ dados.autores }}, </span>
                <span v-if="dados.titulo"> {{ dados.titulo }}, </span>
                <span v-if="dados.congresso"> {{ dados.congresso }}, </span>
                <span v-if="dados.local"> {{ dados.local }}, </span>
                <span v-if="dados.ano"> {{ dados.ano }}, </span>
                <span v-if="dados.editora"> {{ dados.editora }}, </span>
                <span v-if="dados.volume"> vol. {{ dados.volume }}, </span>
                <span v-if="dados.paginas"> p. {{ dados.paginas }}</span>
            </p>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'PublicationComponent',
    props: {
        dados: Object
    }
}
</script>
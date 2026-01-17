<template>
    <div class="card border-primary mb-3">
        <div class="card-body">
            <p class="card-text">
                <span v-if="dados.autores"> {{ dados.autores }}, </span>
                <span v-if="dados.titulo"> {{ dados.titulo }}, </span>
                <span v-if="dados.inicio"> {{ dados.inicio }}, </span>
                <span v-if="dados.tipo"> {{ dados.tipo }}, </span>
                <span v-if="dados.instituicao"> {{ dados.instituicao }}, </span>
                <span v-if="dados.editora"> {{ dados.editora }}, </span>
            </p>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ThesesComponent',
    props: {
        dados: Object
    }
}
</script>
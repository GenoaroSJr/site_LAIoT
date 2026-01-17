<template>
    <div>
        <!-- heading -->
        <div class="container mb-3">
            <div class="row">
                <div class="col-4">
                    <heading-component class="heading"/>
                </div>
                <div class="col-4">
                    <heading-component class="heading"/>
                </div>
                <div class="col-4">
                    <heading-component class="heading"/>
                </div>
            </div>
            <hr>
            <div class="row">
                <h2>Titulo da Palestra ou Secao</h2>
                <p>Sub Titulo da Palestra</p>

                <p>
                    Texto descritivo da palestra
                </p>
            </div>
            <hr>
        </div>
    </div>
</template>
  
<script>
import HeadingComponent from '@/components/Pages/Event/components/HeadingComponent.vue';

export default {
    components: { HeadingComponent },
    name: 'BodySection'
};
</script>

<style scoped>
.heading {
  margin-bottom: 1.5rem;
  text-align: center;
  margin-right: .75rem;
  margin-left: .75rem;
}

</style>
  
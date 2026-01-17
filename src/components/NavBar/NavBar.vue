<template>
    <header>
        <div class="container mt-1">
            <div class="nav-scroller py-1 mb-2">
                <nav class="nav d-flex justify-content-between">
                    <router-link class="p-2 link-secondary" :to="{ name: 'Inicio'}">Início</router-link>
                    <router-link class="p-2 link-secondary" :to="{ name: 'Equipe'}">Equipe</router-link>
                    <router-link class="p-2 link-secondary" :to="{ name: 'LinhaDePesquisa'}">Linha de Pesquisa</router-link>
                    <router-link class="p-2 link-secondary" :to="{ name: 'Publicacoes'}">Publicações</router-link>
                    <router-link class="p-2 link-secondary" :to="{ name: 'TeseseDissertacoes'}">Teses e Dissertações</router-link>
                    <router-link class="p-2 link-secondary" :to="{ name: 'Eventos'}" style="pointer-events: none; color: lightgrey;">Eventos</router-link>
                    <router-link class="p-2 link-secondary" :to="{ name: 'GaleriadeFotos'}">Galeria de Fotos</router-link>
                    <router-link class="p-2 link-secondary" :to="{ name: 'Contato'}">Contato</router-link>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>
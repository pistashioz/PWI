<template>
    <div style="max-width: 300px; overflow: hidden; margin: 2rem;">
        <img :src="cityProp.picture" alt="" style="max-width: 300px; max-height: 300px;">
        <h4>{{ cityProp.name }}</h4>
        <p>{{ cityProp.description }}</p>
        <button @click="addFavorite">{{ isFavorite ? 'Remove dos favoritos' : 'Adicionar aos favoritos' }}</button>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/users';

export default {
    emits: ['favorite'],
    data() {
        return {
            userStore: useUserStore()
        }
    },
    props: {
        // Este é o nome da prop que vai receber o objeto da city, é o que tem que ser colocado quando chamarem o componente e utilizarem aqui dentro deste componente
        cityProp: {
            default: ({
                name: '',
                picture: '',
                description: ''
            }),
            required: true
        }
    },
    computed: {
        isFavorite() {
            // Verifica se a cidade já está nos favoritos do utilizador logado
            return this.userStore.getLoggedInUser.favorites.includes(this.cityProp.id)
        }
    },
    methods: {
        addFavorite() {
            // envia para o componente pai o id da cidade a adicionar aos favoritos, através do emit "@favorite"
            this.$emit('favorite', this.cityProp.id)
        }
    },
}
</script>

<style lang="scss" scoped></style>
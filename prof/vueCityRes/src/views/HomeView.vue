<template>
  <div>
    <h1>{{ username }}</h1>
    <button @click="showOnlyFavorites = !showOnlyFavorites">{{ showOnlyFavorites ? 'Mostrar todos' : 'Mostrar sofavoritos'
    }}</button>
    <!-- O nome que derem à prop `cityProp` dentro do componente `City`, é o que têm que colocar aqui -->
    <City v-for="city in filteredCities" :cityProp="city" :key="city.id" @favorite="onFavorite" />
  </div>
</template>

<script>
import { useUserStore } from '@/stores/users';
import City from '@/components/City.vue';
import { useCityStore } from '@/stores/cities';

export default {
  components: {
    City,
  },
  data() {
    return {
      userStore: useUserStore(),
      cityStore: useCityStore(),
      showOnlyFavorites: false
    }
  },
  computed: {
    username() {
      // Vai buscar o username do utilizador logado, o `?` é uma condição, se o getLoggedInUser estiver undefined, ele não tenta ir buscar o username, e previne a ocurrencia de erros
      return this.userStore.getLoggedInUser?.username
    },
    filteredCities() {
      // só se esta variavel estiver a true é que devolvemos as cidades que estão nos favoritos
      if (this.showOnlyFavorites)
        return this.cityStore.getCities.filter(city => this.userStore.getLoggedInUser.favorites.includes(city.id))

      return this.cityStore.getCities
    }
  },
  methods: {
    onFavorite(cityId) {
      this.userStore.toggleFavorite(cityId)
    }
  },
}
</script>

<style lang="scss" scoped></style>
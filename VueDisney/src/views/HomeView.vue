<script>
import {useDisneyStore} from '@/stores/character'
import {RouterLink} from 'vue-router';

export default {
  data () {
    return {
      disneyStore: useDisneyStore(),
      character: '',
      
    };
  },
  created(){
    try {
      this.disneyStore.fetchCharacters();
      
    } catch (error) {
      alert(error.message)
    }
  }
}


</script>

<template>
  <v-container class="d-flex justify-center">
    <v-row align = 'center'>
    <v-col  v-for="character in disneyStore.getCharacters" :key="character"  cols = '3'>
      <v-card flat class = 'mx-auto' max-width = '1400'>
    <v-img
      class="align-end text-white"
      height="200"
      :src="character.imageUrl"
      cover
    >
      <v-card-title>{{ character.name }}</v-card-title>
    </v-img>

    <v-card-text>
      <div>Num curta-metragens: {{ character.shorts}}</div>
      <div>Num shows de tv: {{ character.tvShows}}</div>
      <div>Num video-jogos: {{ character.videoGames }}</div>

    </v-card-text>

    <v-card-actions>
      <router-link :to="{name: 'character', params: {id: character.name}}">Ver mais</router-link>

      <v-btn color="orange">
        Disney
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>
  </v-row>
  </v-container>
  
  
</template>
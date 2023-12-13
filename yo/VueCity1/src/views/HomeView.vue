<template>
 <v-container>

      <v-row>
        <v-col v-for="city in favorites" :key="city.id" cols="4">
          <v-card class="mx-auto" max-width="1400">
    
              <v-card-title>{{ city.name }}</v-card-title>
      
  
            <v-card-subtitle class="pt-4"> city </v-card-subtitle>

          </v-card>
        </v-col>
      </v-row>
    </v-container>


    <v-container>
      <v-row>
        <v-col v-for="city in cities" :key="city.id" cols="4">
          <v-card class="mx-auto" max-width="1400">
            <v-img
              class="align-end text-white"
              height="200"
              :src="city.image"
              cover
            >
              <v-card-title>{{ city.name }}</v-card-title>
            </v-img>
  
            <v-card-subtitle class="pt-4"> city </v-card-subtitle>

            <v-card-actions>
              
                <v-btn @click="add(city.id, city.name)">ADD TO FAV</v-btn>
              
              <v-btn @click="remove(city.id)">REMOVE</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { useCityStore } from "@/stores/city";
  import { useUserStore } from "@/stores/user";
  import { RouterLink } from "vue-router";
  export default {
    data() {
      return {
        cityStore: useCityStore(),
        userStore: useUserStore()
      };
    },
    computed: {
      cities() {
        return this.cityStore.getCities
      },
      favorites(){
        console.log(this.userStore.getFavorites)
        return this.userStore.getFavorites
      }
    },
    methods: {
      remove(id) {
        console.log(id)
        if (confirm("Deseja mesmo remover dos favoritos?")) {
          this.cityStore.remove(id);
        }
      },
      add(id,name) {
        this.cityStore.add(id, name);
      }
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  
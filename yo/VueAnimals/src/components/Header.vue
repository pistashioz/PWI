<script>
import { RouterLink } from "vue-router";
</script>
<template>
    <v-app-bar title="VUEANIMALS2">
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <span class="pr-3"></span>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <span class="pr-3"></span>
    <RouterLink :to="{ name: 'animals' }">Catalog</RouterLink>
    <span class="pr-3"></span>
    <RouterLink :to="{ name: 'addanimal' }" v-if="isAdmin">Add animal</RouterLink>
    <RouterLink :to="{ name: 'login' }" v-if="!isUser">Login</RouterLink>
    
    <span v-else>
      Olá, {{ name }}
      <button @click="logout">logout</button>
    </span>
    <span class="pr-3"></span>
  </v-app-bar>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  }
}
</script>

<template>
  <v-app>
    <Header />
    <v-main class="d-flex align-center justify-center" >
      <RouterView />
    </v-main>
  </v-app>
</template>


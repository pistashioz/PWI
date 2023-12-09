<script>
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user";
export default {
  data() {
    return {
      store: useUserStore()
    };
  },
  computed: {
    name() {
      return this.store.getUser?.username 
    },
    isUser() {
      return this.store.isUser
    }
  },
  methods: {
    logout() {
      this.store.logout();
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<template>
  <v-app-bar title="VUECITY">
    <RouterLink :to="{ name: 'login' }" v-if="!isUser">Login</RouterLink>
    
    <span v-else>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <span class="pr-3"></span>
      {{ name }}
      <button @click="logout">logout</button>
    </span>
    <span class="pr-3"></span>
  </v-app-bar>
</template>

<style lang="scss" scoped></style>


<template>
  <v-sheet width="300" class="mx-auto">
    <v-form>
      <v-text-field
        v-model="userName"
        label="username"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="password"
        type = 'password'
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import {useUserStore} from '@/stores/user'
  export default {
    data() {
        return {
            store: useUserStore(),
            username: '',
            password: ''
        }
    },
    methods: {
    login() {
      try {
        this.store.login(this.username, this.password)
        this.$router.push({ name: "animals" });
      } catch (error) {
         alert(`Error: ${error.message}`); 
      }
    },
  },
};
</script>






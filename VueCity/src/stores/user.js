import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    isUserAuthenticated: false,
    user: null,
    users: [ { "id": 1, "username": "dinis", "password": "12345", "favorites": [] }, { "id": 2, "username":
    "artur", "password": "12345", "favorites": [] }, { "id": 3, "username": "rita", "password":
    "12345", "favorites": [] } ]     
  }),
  getters: {
    getUser: (state) => state.user,
    isUser: (state) => state.isUserAuthenticated,
    getFavorites: (state) => state.cities,
  },
  actions: {
    login(username, password) {
      const user = this.users.find(
        (user) => user.username == username && user.password == password
      );
      if (user) {
        this.isUserAuthenticated = true;
        this.user = user;
        this.cities = user.favorites
      } else {
        throw Error("User invalid!");
      }
    },
    logout() {
      this.isUserAuthenticated = false;
      this.user = null;
      this.cities = null
    },
  },  
  persist: true,
});

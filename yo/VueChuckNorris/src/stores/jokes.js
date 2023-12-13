import { defineStore } from "pinia";
import * as api from "../api/api";

const JOKE_API_BASE_URL = 'https://api.chucknorris.io';

export const useJokeStore = defineStore("joke", {
  state: () => ({
    jokes: [],
  }),
  getters: {
    getJokes: (state) => state.jokes,
  },
  actions: {
    async fetchJokes() {
      try {
        const data = await fetch('https://api.chucknorris.io/jokes/random');
        const devicesData = await data.json()
        this.jokes = devicesData
        console.log(this.jokes)
      } catch (error) {
        console.error("Error in store fetching Device breeds:", error);
        throw error;
      }
      },
  },
});

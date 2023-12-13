<template>
  <div>
    <h1>RANDOM CHUCK NORRIS JOKE</h1>
    <p v-if="currentJoke">{{ currentJoke.value }}</p>
    <p v-else>No joke available</p>
  </div>
</template>

<script>
import { useJokeStore } from "@/stores/jokes";

export default {
  data() {
    return {
      JokeStore: useJokeStore(),
      currentJoke: null,
    };
  },
  created() {
    try {
      this.JokeStore.fetchJokes();
      // Set interval to update the current joke every 5 seconds
      this.intervalId = setInterval(() => {
        this.updateCurrentJoke();
      }, 5000);
    } catch (error) {
      alert(error.message);
    }
  },
  beforeDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.intervalId);
  },
  methods: {
    updateCurrentJoke() {
      const jokes = this.JokeStore.getJokes;
      if (jokes.length > 0) {
        // Choose a random joke from the array
        const randomIndex = Math.floor(Math.random() * jokes.length);
        this.currentJoke = jokes[randomIndex];
      }
    },
  },
};
</script>

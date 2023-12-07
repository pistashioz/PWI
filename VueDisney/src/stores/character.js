import { defineStore } from 'pinia';
import * as api from '../api/api'
const DISNEY_API_BASE_URL = 'https://api.disneyapi.dev'
class Character {
  constructor(name, imageUrl, shorts, tvShows, videoGames){
    this.name = name,
    this.imageUrl = imageUrl,
    this.shorts = shorts,
    this.tvShows = tvShows,
    this.videoGames = videoGames
  }
};
export const useDisneyStore = defineStore('character', {
  state: () => ({
    characterList: [],
  }),
  getters:{
    getCharacters: (state) => state.characterList,
  },
  actions: {
    async fetchCharacters(){
      try{
        const characters = await api.get(DISNEY_API_BASE_URL, 'character');
        characters.data.forEach((character) => {
          // Create an instance of the Character class for each character
          const charInfo = new Character(
            character.name,
            character.imageUrl,
            character.shortFilms.length,
            character.tvShows.length,
            character.videoGames.length
          );
          console.log(charInfo)
          this.characterList.push(charInfo)
        });
      }
      catch (error) {
        console.error('Error in store fetching character list:', error);
        throw error;
      }
    }
  },
});


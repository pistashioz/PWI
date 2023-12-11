import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useCityStore = defineStore("city", {
  state: () => ({
    cities: [
      {
        id: 1,
        name: "Porto",
        image: "https://tinyurl.com/w5utf6u5",
      },
      {
        id: 2,
        name: "Lisboa",
        image: "https://tinyurl.com/3tck98xm",
      },
      {
        id: 3,
        name: "Coimbra",
        image: "https://tinyurl.com/yvr5shv8",
      },
      {
        id: 4,
        name: "Aveiro",
        image: "https://tinyurl.com/mr3u3yje",
      },
    ],
   
  }),
  getters: {
    getCities: (state) => state.cities,
  },
  actions: {
    
    remove(id) {
        const userStore = useUserStore()
        const user = userStore.getUser
        if (user){
            user.favorites = user.favorites.filter((city) => city.id != id);
            console.log(user.favorites)
        }
    },
    add(id, name) {
        const userStore = useUserStore()
        const user = userStore.getUser
        if (user){
            if (!user.favorites.some((fav) => fav.id === id)){
                const favCity = {id, name}
                user.favorites.push(favCity)
            }
           
            else {
                throw Error("City already in favorites!");
              }
              console.log(user.favorites)
        }
    },
  }, 
  
  persist: true,
});

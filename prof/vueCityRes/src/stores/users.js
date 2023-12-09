import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', ({
    state: () => ({
        users: [
            { "id": 1, "username": "dinis", "password": "12345", "favorites": [] },
            {
                "id": 2, "username":
                    "artur", "password": "12345", "favorites": []
            },
            {
                "id": 3, "username": "rita", "password":
                    "12345", "favorites": []
            }
        ],
        // É guardado o id do utilizador que fez login
        loggedInUserId: null
    }),
    getters: {
        getUsers() {
            return this.users;
        },
        // Retorna o utilizador que fez login, assumindo que foi feito o set do `loggedInUserId`
        getLoggedInUser() {
            return this.users.find(user => user.id == this.loggedInUserId)
        }
    },
    actions: {
        setLoggedInUser(userId) {
            this.loggedInUserId = userId
        },
        toggleFavorite(cityId) {
            // recebe o id de uma cidade a adicionar aos favoritos
            if (this.getLoggedInUser.favorites.includes(cityId)) {
                // se a cidade já estiver nos favoritos, filtramos os favoritos por aquela que não queremos que esteja 
                this.getLoggedInUser.favorites = this.getLoggedInUser.favorites.filter(favorite => favorite != cityId)
            }
            else {
                // se não estiver nos favoritos, damos push para o array dos favoritos do utilizador logado
                this.getLoggedInUser.favorites.push(cityId)
            }
        }
    },
    persist: true
}))

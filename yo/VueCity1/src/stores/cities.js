import { defineStore } from 'pinia'

export const useCityStore = defineStore('cities', ({
    state: () => ({
        cities: [
            {
                id: 1,
                name: 'Braga',
                picture: 'https://www.remessaonline.com.br/blog/wp-content/uploads/2023/09/braga-portugal.jpg',
                description: 'Braga é a cidade portuguesa capital do Distrito de Braga e da sub-região do Cávado (NUT III), pertencendo à região do Norte (NUT II).'

            },
            {
                id: 2,
                name: 'Lisboa',
                picture: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTIphWXJl7-4MNPSOj1O-OzMb0h15Tj9RbYA5_LYA7uVK1cq6NypFAKOHGMzkuMiM0zyvxrkP7pODYVqFvPyl2FN903eA2PeuxtAH6-lA',
                description: 'Lisboa é uma cidade e município, capital de Portugal e da Área Metropolitana de Lisboa. Tem uma área urbana de 100,05 km² e em 2021 tinha 545 796 habitantes'

            },
            {
                id: 3,
                name: 'Porto',
                picture: 'https://www.ucp.pt/sites/default/files/styles/prose_large/public/2018-07/Cidade_Porto%20%281%29.jpg?itok=G7mGDzr4',
                description: 'Foi a cidade principal do Entre Douro e Minho e a capital da região do Douro Litoral, que são dois territórios identitários que ainda hoje têm forte coesão'

            }
        ]
    }),
    getters: {
        getCities() {
            return this.cities;
        }
    },
    actions: {
    }
}))

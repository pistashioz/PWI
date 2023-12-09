<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="onSubmit">
            <label for="">Username</label>
            <input type="text" v-model="username">
            <label for="">Password</label>
            <input type="password" v-model="password">
            <p>{{ errorMessage }}</p>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/users';


export default {
    data() {
        return {
            username: '',
            password: '',
            errorMessage: '',
            userStore: useUserStore()
        }
    },
    methods: {
        onSubmit() {
            // Limpar a mensagem de erro a cada submit, nos casos em que são feitas chamadas a uma api, faz com que a mensagem desapareça logo, e enquanto dá loading o utilizador não fica a pensar que tem as credenciais erradas
            this.errorMessage = '';

            // Procurar na store o user que tem este username e password
            const user = this.userStore.getUsers.find(user => user.username == this.username && user.password == this.password);

            // Se não encontrar nenhum utilizador mostra a mensagem de erro e da return para continuar o resto do codigo
            if (!user) {
                this.errorMessage = 'Username ou password errados';
                return;
            }

            // Guardar o id do utilizador na store e redirecionar para a Home
            this.userStore.setLoggedInUser(user.id);
            this.$router.push({ name: 'Home' })
        }
    },
}
</script>

<style lang="scss" scoped></style>
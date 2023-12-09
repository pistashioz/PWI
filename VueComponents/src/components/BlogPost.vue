<template>
    <div>
      <h1>Lista de Tarefas</h1>
      <CardPost title='My title' author="My author" content="My content"/>
      <CardPost title='My title' author="My author5" content="My content"/>
    </div>
  </template>
  
  <script>
  import CardPost from './CardPost.vue'

  
  export default {
        components: {
            CardPost
        }
    }
    
  </script>
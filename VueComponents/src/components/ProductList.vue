<template>
  <table>
  <tr v-for="product in products" :key="product.id">
    <td>{{ product.id }}</td>
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
    <td><button @click = 'display(product)'>SELECT</button></td>
  </tr>
</table>
</template>
<script>

  export default {
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    methods: {
      display(product){
        console.log(product)
        this.$emit('display', product)
      }
    }
  }
</script>
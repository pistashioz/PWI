<template>

  <ProductList v-bind:products="products" @display = 'display'/>
  <div>{{ message }}</div>
</template>
<script>
  import ProductList from './ProductList.vue'
  export default {

    data(){
      return{
        products: [
          {id: 1, name: 'apple', price: 0.90},
          {id: 2, name: 'pear', price: 0.85},
          {id: 3, name: 'avocado', price: 0.5},
        
        ],
        message: ''
      }
    },
    components: {
      ProductList
    },
  
    methods: {
      display(product){
        this.message = `product: ${product.name}, price: ${product.price}`
      }
    }
  }
</script>
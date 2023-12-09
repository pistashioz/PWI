<template>
    <button @click = 'increment'>+</button>
    <div> {{ count}}</div>
    <button @click = 'reset'>RES</button>
</template>

<script>
export default {
data() {
    return{   
        count: 0
    }
    },
    methods: {
        reset(){
            this.count = 0
            this.$emit('resetCounter', this.count)
        },
        increment(){
            this.count++
        }
    }
}
;
</script>

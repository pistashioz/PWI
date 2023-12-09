<template>
    <div>{{ message }}</div>
    <Counter @resetEvent="reset"/>
</template>
<script>
import Counter from './Counter.vue'
export default{
    components: {
        Counter
    },
    data(){
        return {
            message: ''
        }
    },
    methods: {
        reset(count){
            this.message = `count was reset to ${count}`
        }
    }
}

</script>
<template>
    <table v-if = 'tasks.length != 0'>
        <thead>
            <th>Tarefas</th>
            <th>Concluida</th>
        </thead>
        <tbody>
            <tr v-for='(task, index) in tasks' :key='index'>
                <td>
                    <del v-if = 'task.completed'>{{ task.text }}</del>
                    <span v-else>{{ task.text }}</span>
                </td>
                <td>
                    <input type = 'checkbox' v-model = 'task.completed' @change='completeTask(index)'>
                </td>
            </tr>
        </tbody>
    </table>
    <p v-else>No task found</p>
    
</template>

<script>
export default {
    props: {
        tasks: Array,
    },
    methods: {
        completeTask(index) {
            this.$emit('completeTask', index)
        }
    }
}

</script>

<template>
    <h1>Lista de tarefas</h1>
    <taskForm @addTask = 'addTask'/>
    <TaskList :tasks="tasks" @completeTask="completeTask"/>
</template>

<script>
import taskList from './TaskList.vue'
import taskForm from './TaskForm.vue'
    export default {
        components:{
            taskForm,
            taskList,
        }
        ,
    data(){
        return {
            tasks: []
        }
    },
    methods: {
        completeTask(index){
            if (this.tasks[index].completed){
                alert('Task completed')
            }
            else{
                alert('task was not completed')
            }
        },
        addTask(newTask){
            this.tasks.push(newTask)
        }
    }
    }
</script>


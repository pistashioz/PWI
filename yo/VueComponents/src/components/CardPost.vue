<template>
        <div>{{ title }}</div>
        <div> {{ author }}</div>
        <div> {{ content }}</div>
  </template>
  
  <script>
  export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        author: String,
        content: {
            type: String,
            required: true
        }
    }
  };
  </script>
  
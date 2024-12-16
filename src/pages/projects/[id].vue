<script setup lang='ts'>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = ref((route.params as { id: string }).id);
</script>
<template>
  <div>
    <h1>Single Project View {{ id }}</h1>
    <router-link to="/projects">Go back to projects</router-link>
  </div>
</template>

<style scoped lang='scss'></style>
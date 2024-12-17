<script setup lang="ts">
// import { useProjectStore } from '@/store';
import { supabase } from '@/lib/supabaseClient';
// const projectStore = useProjectStore();

console.log(supabase);
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

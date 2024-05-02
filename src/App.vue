<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

</script>

<style scoped>
#app {
  font-family: "Ariel",serif;
  @apply antialiased flex flex-col items-center mt-4;
}
</style>

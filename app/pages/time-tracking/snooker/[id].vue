<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const route = await useRoute();
</script>

<template>
  <h2 class="text-3xl">Snooker table {{ route.params.id }}</h2>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const route = await useRoute();
</script>

<template>
  <p>Time tracking {{ route.params.slug }} placeholder</p>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <img v-if="colorMode.value === 'dark'" src="~/assets/images/P_Dark.svg" width="40" height="40" />
  <img v-else src="~/assets/images/P.svg" width="40" height="40" />
</template>

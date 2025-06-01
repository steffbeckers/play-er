<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <img
    v-if="colorMode.value === 'dark'"
    class="ps-3 w-full"
    src="~/assets/images/Play-ER_Dark.svg"
  />
  <img v-else class="ps-3 w-full" src="~/assets/images/Play-ER.svg" />
</template>

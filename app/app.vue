<script setup lang="ts">
const user = useSupabaseUser();
</script>

<template>
  <UApp>
    <UHeader title="Play-ER">
      <template #right>
        <UColorModeButton />
        <UUser v-if="user" :name="user.name ?? user.email" />
      </template>
    </UHeader>
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
    <UFooter />
  </UApp>
</template>

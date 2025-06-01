<script setup lang="ts">
const user = useSupabaseUser();
const redirectInfo = useSupabaseCookieRedirect();

watch(
  user,
  () => {
    if (user.value) {
      // Redirect to protected page
      return navigateTo(redirectInfo.pluck() ?? "/");
    }
  },
  { immediate: true }
);
</script>

<template>
  <div>Waiting for login...</div>
</template>

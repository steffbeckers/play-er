<script lang="ts" setup>
const supabase = useSupabaseClient();

onMounted(async () => {
  await supabase.auth.signOut({ scope: "local" });
  location.reload();
});
</script>

<template>
  <div>Logging out...</div>
</template>

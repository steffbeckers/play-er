<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <UDashboardPanel id="dashboard">
    <template #header>
      <UDashboardNavbar title="Dashboard" />
    </template>
    <template #body>
      <UPageGrid>
        <UPageCard title="Time tracking" icon="i-lucide-clock" to="/time-tracking" />
      </UPageGrid>
    </template>
  </UDashboardPanel>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <UDashboardPanel id="dashboard">
    <template #header>
      <UDashboardNavbar title="Dashboard">
        <template #leading>
          <!-- TODO: Move this to a generic place? -->
          <UDashboardSidebarCollapse variant="subtle" />
        </template>
      </UDashboardNavbar>
    </template>
    <template #body>
      <p>Dashboard placeholder</p>
    </template>
  </UDashboardPanel>
</template>

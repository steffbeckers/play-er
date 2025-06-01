<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

definePageMeta({
  layout: "dashboard",
});

const navigationMenuItems: NavigationMenuItem[][] = [
  [
    {
      label: "General",
      // TODO: Add icons?
      // icon: "i-lucide-clock",
      to: "/time-tracking",
      exact: true,
    },
    {
      label: "Snooker",
      to: "/time-tracking/snooker",
    },
    {
      label: "Pool",
      to: "/time-tracking/pool",
    },
    {
      label: "Darts",
      to: "/time-tracking/darts",
    },
  ],
];
</script>

<template>
  <UDashboardPanel id="time-tracking">
    <template #header>
      <UDashboardNavbar title="Time tracking">
        <template #leading>
          <!-- TODO: Move this to a generic place? -->
          <UDashboardSidebarCollapse variant="subtle" />
        </template>
      </UDashboardNavbar>
      <UDashboardToolbar>
        <!-- NOTE: The `-mx-1` class is used to align with the `DashboardSidebarCollapse` button here. -->
        <UNavigationMenu :items="navigationMenuItems" highlight class="-mx-1 flex-1" />
      </UDashboardToolbar>
    </template>
    <template #body>
      <NuxtPage />
    </template>
  </UDashboardPanel>
</template>

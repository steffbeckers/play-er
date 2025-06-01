<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const navigationMenuItems: NavigationMenuItem[][] = [
  [
    {
      label: "Dashboard",
      icon: "i-lucide-house",
      to: "/",
    },
    {
      label: "Time tracking",
      icon: "i-lucide-clock",
      to: "time-tracking",
    },
  ],
];
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar collapsible>
      <template #header="{ collapsed }">
        <template v-if="!collapsed">
          <PlayERLogo />
        </template>
        <template v-else>
          <PlayERIcon />
        </template>
      </template>
      <template #default="{ collapsed }">
        <UNavigationMenu
          :collapsed="collapsed"
          :items="navigationMenuItems[0]"
          orientation="vertical"
        />
        <UNavigationMenu
          :collapsed="collapsed"
          :items="navigationMenuItems[1]"
          orientation="vertical"
          class="mt-auto"
        />
      </template>
      <template #footer="{ collapsed }">
        <UserMenu :collapsed="collapsed" />
      </template>
    </UDashboardSidebar>
    <slot />
  </UDashboardGroup>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const navigationMenuItems: NavigationMenuItem[][] = [
  [
    {
      label: "Dashboard",
      icon: "i-lucide-house",
    },
  ],
];
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar collapsible>
      <template #header="{ collapsed }">
        <template v-if="!collapsed">
          <Logo />
        </template>
        <template v-else>
          <Icon />
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

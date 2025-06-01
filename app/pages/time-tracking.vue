<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <UDashboardPanel id="time-tracking">
    <template #header>
      <UDashboardNavbar title="Time tracking" />
    </template>
    <template #body>
      <div class="flex gap-8 h-full">
        <div class="flex-1/5 flex flex-col gap-4">
          <NuxtLink class="time-tracking__type-link" to="/time-tracking/snooker">
            <UCard>
              <h2>Snooker</h2>
            </UCard>
          </NuxtLink>
          <NuxtLink class="time-tracking__type-link" to="/time-tracking/pool">
            <UCard>
              <h2>Pool</h2>
            </UCard>
          </NuxtLink>
          <NuxtLink class="time-tracking__type-link" to="/time-tracking/darts">
            <UCard>
              <h2>Darts</h2>
            </UCard>
          </NuxtLink>
        </div>
        <NuxtPage class="flex-4/5" />
      </div>
    </template>
  </UDashboardPanel>
</template>

<style lang="css" scoped>
@reference "@/assets/css/main.css";

.time-tracking__type-link {
  @apply flex-1 focus:outline-none;
}

.time-tracking__type-link > div {
  @apply flex h-full items-center justify-center transition hover:bg-elevated/50;
}

.time-tracking__type-link.router-link-active > div {
  @apply bg-primary/75 border-primary border-2;
}
</style>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const types = [
  {
    name: "Snooker",
    slug: "snooker",
  },
  {
    name: "Pool",
    slug: "pool",
  },
  {
    name: "Darts",
    slug: "darts",
  },
];
</script>

<template>
  <UDashboardPanel id="time-tracking">
    <template #header>
      <UDashboardNavbar title="Time tracking" />
    </template>
    <template #body>
      <div class="flex gap-8 h-full">
        <div class="flex-1/5 flex flex-col gap-4">
          <NuxtLink
            v-for="type in types"
            :key="type.slug"
            class="time-tracking__type-link"
            :to="'/time-tracking/' + type.slug"
          >
            <UCard>
              <h2 class="text-2xl">{{ type.name }}</h2>
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

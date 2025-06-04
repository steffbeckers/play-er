<script lang="ts" setup>
const tables = [1, 2, 3];
</script>

<template>
  <div class="flex gap-8">
    <div class="flex-1/3 flex flex-col flex-wrap gap-4">
      <NuxtLink
        v-for="table in tables"
        :key="table"
        class="time-tracking__type-link"
        :to="'/time-tracking/snooker/' + table"
      >
        <UCard>
          <span class="text-5xl">{{ table }}</span>
        </UCard>
      </NuxtLink>
    </div>
    <NuxtPage class="flex-2/3" />
  </div>
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

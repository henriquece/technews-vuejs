<script setup lang="ts">
import NewsCard from './NewsCard.vue';

defineProps<{
  stories: {
    id: string
    title: string
    url: string
    image: string
    time: string
  }[]
}>()
</script>

<template>
  <main>
    <div>
      <NewsCard v-for="story in stories" :story="story" :key="story.id" />
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 72px 16px;
}

div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}
</style>
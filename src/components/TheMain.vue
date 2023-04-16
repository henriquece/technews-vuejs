<script setup lang="ts">
import type { Story } from '@/services/hackerNews';
import { computed, ref } from 'vue';
import CommonButton from './commons/CommonButton.vue';
import CommonTextField from './commons/CommonTextField.vue';
import NewsCard from './NewsCard.vue';

const props = defineProps<{
  stories: Story[]
  isLoadingInitialStories: boolean
  isLoadingMoreStories: boolean
}>()

defineEmits<{
  (e: 'loadMoreStories'): void
}>()

const filterValue = ref('')

const filteredStories = computed(() =>
  props.stories.filter((story) => story.title.toLowerCase().includes(filterValue.value.toLowerCase()))
)
</script>

<template>
  <main>
    <div class="filter-textfield-wrapper">
      <CommonTextField placeholder="Filter articles" v-model="filterValue" />
    </div>
    <div class="news-cards">
      <NewsCard v-for="story in filteredStories" :story="story" :key="story.id" />
    </div>
    <CommonButton v-if="!isLoadingInitialStories" label="Load more" :loading="isLoadingMoreStories"
      @click="$emit('loadMoreStories')" />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
  padding: 36px 8px 36px;
}

.filter-textfield-wrapper {
  width: 100%;
  padding: 0px 8px;
  align-self: flex-start;
}

.news-cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
}
</style>
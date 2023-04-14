<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import { getTopStories, getStory, type TopStories, type Story } from './services/hackerNews';

const pageSize = 8

const topStoriesIds = ref<TopStories>([])

const page = ref(0)

const stories = ref<Story[]>([])

const isLoadingInitialStories = ref(true)

const isLoadingMoreStories = ref(false)

const loadStories = async () => {
  const fetchedStories = await Promise.all(topStoriesIds.value.slice(page.value, page.value + pageSize).map(story => getStory(story)))

  stories.value.push(...fetchedStories.map(story => ({
    id: story.data.id,
    title: story.data.title,
    url: story.data.url,
    time: story.data.time,
  })))

  page.value = page.value + pageSize
}

onMounted(async () => {
  const { data } = await getTopStories()

  topStoriesIds.value = data

  await loadStories()

  isLoadingInitialStories.value = false
})

const loadMoreStories = async () => {
  isLoadingMoreStories.value = true

  await loadStories()

  isLoadingMoreStories.value = false
}
</script>

<template>
  <TheHeader />
  <TheMain :stories="stories" :isLoadingInitialStories="isLoadingInitialStories"
    :isLoadingMoreStories="isLoadingMoreStories" @loadMoreStories="loadMoreStories" />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

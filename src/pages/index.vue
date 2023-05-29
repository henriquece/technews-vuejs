<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from '~/components/TheHeader.vue'
import TheMain from '~/components/TheMain.vue'
import { type TopStories, type Story, getTopStoriesUrl, getStoryUrl, getStory } from '~/services/hackerNews'

useHead({ title: 'Tech News' })

const pageSize = 8

const page = ref(0)

const stories = ref<Story[]>([])

const isLoadingMoreStories = ref(false)

const { data: topStoriesIds } = await useFetch<TopStories>(getTopStoriesUrl)

const loadStories = async (isServer: boolean) => {
  const fetchedStories = await Promise.all((topStoriesIds.value || []).slice(page.value, page.value + pageSize).map((story) => {
    if (isServer) {
      return useFetch(getStoryUrl(story))
    }
    return getStory(story)
  }))

  stories.value.push(...fetchedStories.map((story) => {
    const storyData = isServer ? (story.data as Ref).value : story.data

    return {
      id: storyData.id,
      title: storyData.title,
      url: storyData.url,
      time: storyData.time
    }
  }))

  page.value = page.value + pageSize
}

const loadMoreStories = async () => {
  isLoadingMoreStories.value = true

  await loadStories(false)

  isLoadingMoreStories.value = false
}

await loadStories(true)
</script>

<template>
  <TheHeader />
  <TheMain :stories="stories" :is-loading-initial-stories="false" :is-loading-more-stories="isLoadingMoreStories"
    @loadMoreStories="loadMoreStories" />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import { getTopStories, getStory, type TopStories, type Story } from './services/hackerNews';

const topStoriesIds = ref<TopStories>([])

const stories = ref<Story[]>([])

// const articles = [
//   {
//     id: '35511357',
//     title: 'Effective Spaced Repetition',
//     url: 'google.com',
//     image: 'https://borretti.me/assets/card/effective-spaced-repetition.jpg',
//     time: 'Today',
//   },
//   {
//     id: '35511717',
//     title: 'How To Get Started In Soldering',
//     url: 'techcrunch.com',
//     image: 'https://hips.hearstapps.com/hmg-prod/images/soldering-tips-0172-641dcf73e5507.jpg',
//     time: 'Yesterday'
//   },
// ]

onMounted(async () => {
  const { data } = await getTopStories()

  topStoriesIds.value = data

  const fetchedStories = await Promise.all(topStoriesIds.value.slice(0, 6).map(story => getStory(story)))

  stories.value = fetchedStories.map(story => ({
    id: story.data.id,
    title: story.data.title,
    url: story.data.url,
    time: story.data.time,
  }))
})
</script>

<template>
  <TheHeader />
  <TheMain :stories="stories" />
</template>

<style scoped></style>

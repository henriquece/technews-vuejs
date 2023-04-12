<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import { getTopStories, getStory } from './services/hackerNews';

const topStoriesIds = ref([])

const stories = ref([])

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

  const s = await Promise.all(topStoriesIds.value.slice(0, 6).map(story => getStory(story)))

  stories.value = s.map(story => ({
    id: story.data.id,
    title: story.data.title,
    url: story.data.url,
    time: story.data.time,

  }))

  console.log('88', stories)

})

// const inc = () => {
//   t.f = t.f + 1
// }

</script>

<template>
  <TheHeader />
  <TheMain :stories="stories" />
</template>

<style scoped></style>

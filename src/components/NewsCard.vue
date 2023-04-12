<script setup lang="ts">
defineProps<{
  story: {
    id: string
    title: string
    url: string
    image: string
    time: string
  }
}>()
</script>

<template>
  <a :href="story.url" target="_blank">
    <article>
      <h3>{{ story.title }}</h3>
      <div class="time-and-source">
        <time>{{ story.time }}</time>
        <span class="time-and-source-separator">•</span>
        <span>{{ story.url }}</span>
      </div>
      <img :src="story.image" />
    </article>
  </a>
</template>

<style scoped>
a {
  text-decoration: none;
}

article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background-color: var(--color-background-soft);
  cursor: pointer;
  transition: 0.1s border;
}

article:hover {
  border: 1px solid var(--color-border-hover);
}

h3 {
  height: 80px;
  padding: 0px 16px;
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 700;
}

.time-and-source {
  padding: 0px 16px;
  font-size: 13px;
  color: var(--color-text-secondary);
}

time {}

.time-and-source-separator {
  padding: 0px 4px;
}

img {}

@media (min-width: 900px) {
  article {
    width: 320px;
    height: 360px;
    padding: 8px;
  }

  h3 {
    padding: 8px 16px;
    font-size: 20px;
    line-height: 26px;
  }


  img {
    width: 302px;
    height: 160px;
    margin-bottom: 48px;
    border-radius: 12px;
  }
}
</style>
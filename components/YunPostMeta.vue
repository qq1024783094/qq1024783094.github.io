<script setup lang="ts">
import type { Post } from 'valaxy'
import { useSiteConfig } from 'valaxy'

const props = defineProps<{
  post: Post
}>()

const site = useSiteConfig()
</script>

<template>
  <div class="yun-post-meta flex gap-2 flex-wrap items-center">
    <img
      v-if="site.author.avatar"
      :src="site.author.avatar"
      :alt="site.author.name"
      class="w-5 h-5 rounded-full"
    >
    <span class="text-sm">{{ site.author.name }}</span>
    <YunMetaItem :date="post.date" :updated="post.updated" />
    <YunMetaReadingTime :post="post" />
    <YunMetaWordCount :post="post" />
  </div>
</template>

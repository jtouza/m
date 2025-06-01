<script setup lang="ts">
import Avatar from "@/components/Avatar.vue";
import {ExperienceModel} from "@/models";
defineProps<{
  experience: ExperienceModel;
}>();
</script>
<template>
  <article class="card">
    <div class="flex items-start gap-2">
      <avatar :user="experience?.owner" size="md"  />
      <div>
        <p class="title-3">{{ experience.text	}}</p>
        <div class="text-sm text-gray">
          {{ experience.owner?.full_name }}
        </div>
      </div>
    </div>
    <footer class="flex justify-between items-end">
      <router-link to="/" class="text-sm">{{ $t('comments_count', {count: experience.comments }) }}</router-link>
      <router-link to="/" class="text-sm">{{ $t('read_more')}} &rsaquo;</router-link>
    </footer>
  </article>
</template>

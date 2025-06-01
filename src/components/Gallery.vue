<script setup lang="ts">
defineProps<{
  photos: string[]
}>();

</script>

<template>
  <div class="gallery">
    <div v-for="photo in photos" :key="photo">
      <img :src="photo" alt=" " class="thumbnail"/>
    </div>
  </div>
</template>

<style scoped>

</style>
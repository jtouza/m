<script setup lang="ts">
import starIcon from './icons/starIcon.vue';
import starOutlineIcon from './icons/starOutlineIcon.vue';
const props = defineProps<{
  value: null | number;
}>();

import { computed } from 'vue';
const clampedValue = computed(() => Math.min(props.value ?? 0, 5));
</script>

<template>
  <div class="score" :title="`${clampedValue} / 5`">
    <span class="score__label">{{ $t('label_score_stars') }}:</span>
    <component
      v-for="i in 5"
      :is="i <= clampedValue ? starIcon : starOutlineIcon"
      :key="i"
      class="score__icon"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstracts' as *;
.score {
  display: flex;
  gap: 4px;

  &__label {
    font-weight: 500;
    font-size: rem(14);
    color:#48545C;
    margin-right: 1rem;
  }
  &__icon {
    width: rem(20);
    height: rem(20);
  }
}
</style>
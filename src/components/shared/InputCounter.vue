<script setup lang="ts">
defineProps<{
  count: number,
  min: number,
  max: number,
}>();
</script>
<template>
  <div class="input-counter helper-text">
    <span>
    {{ count ?? 0 }}/{{ max }}
    ({{ $t('min_text', {count: min}) }})
      </span>
  </div>
</template>

<style scoped lang="scss">

.input-counter {
  font-weight: 400;
  font-size: rem(10);
  line-height: 100%;
  letter-spacing: 0;
  color:#999;
  text-align: right;
}

</style>
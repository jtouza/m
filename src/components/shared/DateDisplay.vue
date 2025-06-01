<script setup lang="ts">
import { computed } from 'vue';
import { DateTime } from 'luxon';

const props = defineProps<{
  date: DateTime | string | null;
  format?: Intl.DateTimeFormatOptions;
  //locale?: string;
}>();

const defaultFormat: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const parsedDate = computed(() => {
  if (!props.date) return null;

  //const locale = props.locale || 'es';

  if (typeof props.date === 'string') {
    const dt = DateTime.fromISO(props.date); //.setLocale(locale);
    return dt.isValid ? dt : null;
  }

  return props.date;//.setLocale(locale);
});

const formattedDate = computed(() => {
  return parsedDate.value
      ? parsedDate.value.toLocaleString(props.format || defaultFormat)
      : '';
});

</script>

<template>
  <time v-if="parsedDate" :datetime="parsedDate.toISO() as string">{{ formattedDate }}</time>
  <span v-else>{{ formattedDate }}</span>
</template>

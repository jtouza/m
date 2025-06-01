<script setup lang="ts">
import { computed } from 'vue';
import type {Supplier} from "@/types";
import { useI18n } from 'vue-i18n';
import defaultLogo from '@/assets/images/logos/default_supplier_sm.png';


const { t } = useI18n();

const props = defineProps<{
  supplier: Supplier;
}>();

const shortHeadquarters = computed(() => {
  if (!props.supplier.headquarters || props.supplier.headquarters.length === 0) {
    return '';
  }

  const preview = props.supplier.headquarters.slice(0, 3).join(', ');
  return props.supplier.headquarters.length > 3 ? `${preview}...` : preview;
});

</script>

<template>
  <article class="supplier-contact">
    <!-- header -->
    <h2 class="supplier-contact__title">{{ t('doctor_contact.title') }}</h2>
    <!-- body -->
    <div class="flex justify-start gap-2 items-center">
        <img :src="supplier.logo ?? defaultLogo" alt=" " width="63" height="48" class="supplier-contact__logo" />
        <div>
          <div class="supplier-contact__name">{{ supplier.name }}</div>
          <div class="supplier-contact__tagline" v-if="supplier?.headquarters">
            <div>
              {{ supplier.headquarters?.length}}
              {{shortHeadquarters}}
            </div>
          </div>
        </div>
    </div>
    <!-- footer -->
    <a href="#" class="btn btn-primary">{{ t('doctor_contact.call_action') }}</a>
  </article>
</template>

<style scoped lang="scss">

@use '@/assets/scss/abstracts' as *;

.supplier-contact {

  color: #48545C;

  display: flex;
  justify-content: start;
  align-items: start;

  flex-direction: column;

  & > * + * {
    margin-top: rem(24);
  }

  &__title {
    font-size: rem(18);
    line-height: rem(24);
    font-weight: 700;
    letter-spacing: 0;
  }

  &__name {
    font-weight: 500;
    font-size: rem(14);
    line-height: rem(21);
    letter-spacing: 0;
  }

  &__tagline {
    font-size: rem(12);
    line-height: rem(21);
    color: #ACB5BC;
  }

  &__logo{
    border-radius: rem(4);
  }
}

</style>
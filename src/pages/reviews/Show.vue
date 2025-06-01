<script setup lang="ts">

import {ref, onMounted, computed} from 'vue';
import {ExperienceModel, ReviewModel} from "@/models";

import {experienceApiClient} from '@/api/clients/experienceApiClient';
import Experience from "@/components/Experience.vue";
import CurrencyIcon from "@/components/icons/currencyIcon.vue";
import ThumbsUpIcon from "@/components/icons/thumbsUpIcon.vue";
import {useNumberFormatters} from '@/i18n/useNumberFormatters'
import Avatar from "@/components/Avatar.vue";
import DateDisplay from "@/components/shared/DateDisplay.vue";
import ReviewForm from "@/components/ReviewForm.vue";
import DoctorContact from "@/components/DoctorContact.vue";
import Score from "@/components/Score.vue";
import Gallery from "@/components/Gallery.vue";

const lastExperiencies = ref<ExperienceModel[]>([]);
const MIN_COMMENTS = 20;

const fetchExperiences = async () => {
  try {
    const response = await experienceApiClient.latest();
    lastExperiencies.value = response as ExperienceModel[];
  } catch (error) {
    console.error("Failed to fetch users:", error)
  }
}

onMounted(() =>
    fetchExperiences()
);

const numberFormatters = useNumberFormatters('es-ES');
const experiencies = computed(() => lastExperiencies.value.filter(experience => experience.comments > MIN_COMMENTS));
const review = new ReviewModel({
  title: 'Estoy muy orgullosa de mi nuevo abdomen',
  text: 'Es un excelente cirujano que se merece con creces la buena fama tiene, pero para estas cosas no hay que escatimar! El post operatorio ha sido un poco difícil. Aún no me adapto a caminar sin sentir molestia y opresión, pero supongo que es cuestión de tiempo.',
  recommended: true,
  score: 4,
  price: 8500,
  owner: {
    id: null,
    firstName: 'vebris',
    lastName: null,
    title: 'miss',
    picture: '/img/avatars/vebris.jpg',
    email: null,
    location: 'Barcelona (ciudad)'
  },
  createdAt: '2021-09-08',
  treatment: {
    id: null,
    name: 'Tratamiento de abdomen',
    pictures: [
      '/img/treatments/002.jpg',
      '/img/treatments/001.jpg',
      '/img/treatments/002.jpg',
      '/img/treatments/001.jpg',
      '/img/treatments/002.jpg',
      '/img/treatments/001.jpg',
    ],
    supplier: {
      id: null,
      name: 'Dorsia Clínica Estética',
      logo: null,
      headquarters: [
        'Madrid', 'Barcelona', 'Sevilla', 'LLeida', 'Zaragoza', 'Tarragona', 'Valencia', 'Murcia', 'Alicante'
      ]
    }
  },
});
</script>
<template>
  <div class="layout-two-columns">
    <div class="layout-two-columns__main">
      <section class="content">
        <article class="review space-y-2 separator-bottom">
          <header>
            <div class="flex justify-start gap-2 items-center mb-2">
              <avatar :user="review.owner"/>
              <div>
                <div class="font-bold">{{ review.owner?.full_name }}</div>
                <div class="text-sm text-muted">
                  <span>{{ review.owner?.location }}</span> ·
                  <DateDisplay :date="review.createdAt"/>
                </div>
              </div>
            </div>
            <h1 class="title-1">{{ review.title }}</h1>
            <div class="flex justify-start items-center gap-4">
              <div class="tag tag__highlight">
                <thumbs-up-icon/>
                {{ $t('review_ok_label') }}
              </div>
              <div class="tag">
                <currency-icon :currency="review.currency "/>
                {{ $t('price_label', { price : numberFormatters.currency(review.currency).format(review.price)}) }}
              </div>
            </div>
          </header>
          <Gallery v-if="review.treatment?.pictures?.length" :photos="review.treatment.pictures"/>
          <DoctorContact v-if="review.treatment?.supplier" :supplier="review.treatment.supplier ?? null"/>
          <Score :value="review.score"/>
          <div class="review__text">{{ review.text }}</div>
        </article>
        <ReviewForm/>
      </section>
    </div>
    <aside class="layout-two-columns__aside" v-if="lastExperiencies?.length">

        <header class="flex justify-between items-baseline">
          <h2 class="title-2">{{ $t('more_experiences') }}</h2>
          <router-link to="/" class="text-sm text-muted">{{ $t('show_all') }}</router-link>
        </header>
        <Experience v-for="experience in experiencies" :key="experience.id!" :experience="experience"/>

    </aside>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/scss/abstracts' as *;
.separator-bottom {
  border-bottom: 1px solid #E5E5E5;
  padding-bottom: rem(24);
  margin-bottom: rem(24);
}
.review {
  &__text {
    font-weight: 400;
    font-size: rem(14);
    line-height: rem(21);
    letter-spacing: rem(-0.12);
    color: #48545C;
  }
}
</style>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useFormReview} from "@/composables/useFormReview";
import {useTreatments} from "@/composables/useTreatments";
import InputCounter from "@/components/shared/InputCounter.vue";
// defineProps<{}>();
const {
  form,
  save,
  errors,
  TITLE_MAX_LENGTH,
  TITLE_MIN_LENGTH,
  TEXT_MAX_LENGTH,
  TEXT_MIN_LENGTH,
} = useFormReview();
const {
  getTreatments,
  treatments,
} = useTreatments()
onMounted(() => getTreatments());

const submitted = ref(false);

</script>
<template>
  <form @submit.prevent="submitted = true; save();" class="form" novalidate>
    <fieldset class="fieldset">
      <legend>{{ $t('review_form.title') }}</legend>
      <div class="form-group form-group__select"
           :class="{
           'form-group__error': errors.treatment_id,
           'form-group_valid': form.treatment_id && !errors.treatment_id
      }">
        <label for="treatment">{{ $t('review_form.fields.treatment') }}</label>
        <select name="treatment" id="treatment" v-model="form.treatment_id" required>
          <option hidden value="">{{ $t('review_form.placeholders.treatment') }}</option>
          <option v-for="treatment in treatments" :key="treatment.value" :value="treatment.value">
            {{ treatment.label }}
          </option>
        </select>
        <span v-if="errors.treatment_id" class="helper-text">{{ $t('validation.required') }}</span>
      </div>
      <div class="form-group"
           :class="{
        'form-group__error': errors.recommended,
        'form-group__valid': form.recommended && !errors.recommended
      }">
        <label>{{ $t('review_form.fields.recommend') }}</label>
        <div class="flex items-center gap-1.5">
          <label class="form-radio">
            <input type="radio" name="recommended" id="recommended_yes" v-model="form.recommended" :value="true"/>
            <span>{{ $t('Yes') }}</span>
          </label>
          <label class="form-radio">
            <input type="radio" name="recommended" id="recommended_no" v-model="form.recommended" :value="false"/>
            <span>{{ $t('No') }}</span>
          </label>
        </div>
        <span v-if="errors.recommended" class="helper-text">{{ $t('validation.required') }}</span>
      </div>
      <div class="form-group form-group__counter"
           v-show="form.recommended === true"
           :class="{
             'form-group__error': submitted && errors.title,
             'form-group__valid': submitted && form.title && !errors.title}"
      >
        <label for="treatment">{{ $t('review_form.fields.title') }}</label>
        <input type="text" name="title" id="title" v-model="form.title"
               :placeholder="$t('review_form.placeholders.title')" autocomplete="off"/>
        <InputCounter :count="form.title?.length ?? 0" :min="TITLE_MIN_LENGTH" :max="TITLE_MAX_LENGTH"/>
      </div>
      <div class="form-group form-group__counter"
           v-show="form.recommended === true"
           :class="{
             'form-group__error': submitted && errors.text,
             'form-group__valid': submitted && form.text && !errors.text
           }">
        <label for="text">{{ $t('review_form.fields.text') }}</label>
        <textarea name="text" id="text" rows="10" v-model="form.text"
                  :placeholder="$t('review_form.placeholders.text')"/>
        <InputCounter :count="form.text?.length ?? 0" :min="TEXT_MIN_LENGTH" :max="TEXT_MAX_LENGTH"/>
      </div>
    </fieldset>
    <button type="submit" class="btn btn-lg uppercase btn-primary btn-w-full-sm">{{ $t('review_form.submit') }}</button>
  </form>
</template>
<style scoped lang="scss">
@use '@/assets/scss/abstracts' as *;
form {
  margin-bottom: 2rem;
  @include desktop {
    margin-bottom: 5rem;
  }
}
</style>
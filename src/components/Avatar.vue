<script setup lang="ts">
import {computed} from "vue";
import {UserModel} from "@/models";

//import defaultAvatarMrs from '@/assets/images/avatars/mrs.png';
//import defaultAvatarMiss from '@/assets/images/avatars/miss.png';
//import defaultAvatarMr from '@/assets/images/avatars/mr.png';
//import defaultAvatarMs from '@/assets/images/avatars/ms.png';
import defaultAvatarDefault from '@/assets/images/avatars/default.png';

const props = defineProps<{
  user: UserModel | null;
  size?: 'sm' | 'md' | 'lg';
}>();

// Avatar map by user title

// const avatarMap: Record<string, string> = {
//   mr: defaultAvatarMr,
//   mrs: defaultAvatarMrs,
//   miss: defaultAvatarMiss,
//   ms: defaultAvatarMs,
// };

const avatar = computed(() => {
  if (props.user?.picture) {
    return props.user.picture;
  }
  // return avatarMap[props.user?.title ?? ''] ?? defaultAvatarDefault;
  return defaultAvatarDefault;
});

const avatarClass = computed(() => {
  return [
    'avatar',
    props.size === 'lg' ? 'avatar-lg' :
    props.size === 'md' ? 'avatar-md' : 'avatar-sm'
  ];
});
</script>

<template>
  <img :src="avatar" :class="avatarClass" :alt="props.user?.full_name ?? ' '" />
</template>

<style scoped>

</style>
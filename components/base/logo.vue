<script setup>
  const props = defineProps({
    svg: String
  });
</script>

<template>

  <nuxt-link to="/" color="black">
    <v-img cover
     :src="`/svgs/${svg}.svg`"
     alt="Football ticket logo"
     class="logo">
    </v-img>
  </nuxt-link>
</template>

<style lang="scss" scoped>
 @import '@/assets/scss/main';

  .logo {
    width: 104px;
    @include sm { width: 204px; }
  }
</style>

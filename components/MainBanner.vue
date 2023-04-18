<script setup>
  const tab = ref(0)

  const tabs = ['Upcoming Matches', 'Stadium Information', 'FAQs']
</script>

<template>
  <v-container fluid
  class="pa-0">

  <div class="banner-wrapper">
  </div>
  </v-container>
</template>

<style lang="scss" scoped>
 @import '@/assets/scss/mixins';

  .banner-wrapper {
    background: linear-gradient(180deg, rgba(7, 11, 50, 0) 40.6%, rgba(7, 11, 50, 0.3) 100%), url('/images/stadium-banner.jpg') center;
    background-size: cover;
    height: 200px;
    @include xs { height: 250px; };
    @include sm { height: 350px; };
    @include md { height: 450px; };
    @include lg { height: 500px; };
  }

  .v-tab {
    text-transform: none !important;
    font-weight: 700;
  }
</style>

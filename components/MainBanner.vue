<script setup>
  const tab = ref(0)

  const tabs = ['Upcoming Matches', 'Stadium Information', 'FAQs']
</script>

<template>
  <v-container fluid class="pa-0">
    <v-img
     src="/svgs/old-trafford.svg">
    </v-img>
  </v-container>
</template>

<style lang="scss" scoped>
 @import '@/assets/scss/mixins';

  .v-container {
    background: linear-gradient(180deg, rgba(7 11 50 / 0) 40.6%, rgba(7 11 50 / .3) 100%), url('/images/stadium-banner.jpg') center;
    background-size: cover;
    position: relative;
    height: 250px;
    @include xs { height: 350px; };
    @include sm { height: 400px; };
    @include md { height: 450px; };
    @include lg { height: 500px; };
  }

  .v-img {
    position: absolute;
    bottom: 12%;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    @include sm { width: 250px; }
    @include md { width: 350px; }
  }
</style>

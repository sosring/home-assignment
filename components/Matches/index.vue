<script setup>
  const tab = ref(0)
  const tabs = ['Upcoming Matches', 'Stadium Information', 'FAQs']
</script>

<template>
  
  <v-container class="pa-0" fluid>

   <v-tabs v-model="tab" 
    slider-color="accent" align-tabs="center">
      <v-tab v-for="(tab, index) in tabs"
       :key="tab" class="pt-1 mb-2"
       :value="index">
        {{ tab }}
      </v-tab>
    </v-tabs>
   <v-divider></v-divider>
  </v-container>

</template>

<style>
  .v-tab {
    text-transform: none !important;
    font-weight: 700;
    font-size: clamp(.8rem, 2.5vw, 1rem)
  }
</style>

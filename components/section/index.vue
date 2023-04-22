<script setup>
  const currentSection = ref('Upcoming Matches') 
  const tabs = ['Upcoming Matches', 'Stadium Information', 'FAQs']

  // Intersection Observer
  onMounted(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
          currentSection.value = entry.target.getAttribute('id')
        } 
      })
    },
    {
      rootMargin: '0px 0px -90px 0px'
    }
    );
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section)
      currentSection.value = section.id
    })
  })
</script>

<template>
  
  <v-container fluid class="py-0">

   <v-tabs v-model="currentSection" 
    slider-color="accent" align-tabs="center">
      <v-tab v-for="tab in tabs"
       :key="tab" class="px-sm-6"
       :value="tab"
       :href="`#${tab}`">
        {{ tab }}
      </v-tab>
    </v-tabs>
   <v-divider></v-divider>
  </v-container>

  <Section-matches />
  <Section-stadium />
  <Section-FAQs />

</template>

<style lang="scss" scoped>
  .v-tab {
    text-transform: none !important;
    font-weight: 700;
    font-size: clamp(.8rem, 2.5vw, 1rem);
  }
</style>

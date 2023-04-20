<script setup>
  const currentSection = useState('currentSection', () => 'Upcoming Matches') 
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
      rootMargin: '0px 0px -90px 0px',
    }
    );
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section)
      currentSection.value = section.id
    })
  })
</script>

<template>
  
  <v-container class="pa-0" fluid>

   <v-tabs v-model="currentSection" 
    slider-color="accent" align-tabs="center">
      <v-tab v-for="tab in tabs"
       :key="tab" class="pt-1 mb-2"
       :value="tab"
       :href="`#${tab}`">
        {{ tab }}
      </v-tab>
    </v-tabs>
   <v-divider></v-divider>
  </v-container>

  <Lazy-Section-matches />
  <!--
  <Lazy-Section-StadiumInfo />
  -->

</template>

<style lang="scss" scoped>
  .v-tab {
    text-transform: none !important;
    font-weight: 700;
    font-size: clamp(.8rem, 2.5vw, 1rem);
  }
</style>

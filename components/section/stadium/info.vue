<script setup>
  import { useFootballStore } from '~/stores/useFootballStore.js'
  const useFootball = useFootballStore()

  const stadium = ref(null)

  onBeforeMount(async () => {
    const data = await useFootball.getStadium()
    stadium.value = data
  })
</script>

<template>

 <section id="Stadium Information">

  <v-container fluid 
   class="pa-0 py-sm-8 bg-grey-lighten-4">

   <v-row>
    <Section-stadium-features />

    <v-col cols="12">

      <v-row align="start" 
       class="py-4 py-sm-6 py-md-8">
        <v-col cols="12" md="5"
         align="center">

          <v-img
           width="400"
           cover
           alt="stadium info picture"
           lazy-src="/images/stadium-info.jpg"
           src="/images/stadium-info.jpg">
          </v-img>
        </v-col>

        <v-col class="py-0">
          <div v-if="stadium">
            <h3 class="title mb-4">{{ stadium.name }}</h3>
            <div v-html="stadium.description" 
             class="paragraph-wrapper"></div>
          </div>
        </v-col>
      </v-row>
    </v-col>
   </v-row>
  </v-container>
 </section>
</template>

<style lang="scss" scoped>

  .title {
    font-size: clamp(1rem, 5vw, 2rem);
    font-weight: 500;
  }

  .paragraph-wrapper {
    font-size: clamp(.8rem, 2.5vw, 1rem);
    font-weight: 300;
    display: grid;
    gap: .4rem;
  }

  .stadium-img {
    position: relative;
    transform-style: preserve-3d;

    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      background: lighten($accent, 5); 
      transform: translate(.5rem, .7rem) translateZ(-1px);
    }
  }
</style>

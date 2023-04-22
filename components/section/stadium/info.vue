<script setup>
  
  const props = defineProps({
    stadium: Object
  });
</script>

<template>

  <v-row align="start" 
   class="py-4 py-md-8">

    <v-col cols="12" md="5" 
     rounded="0" class="pb-8">

      <v-img cover
       class="stadium-img w-75"
       alt="stadium info picture"
       lazy-src="/images/stadium-info.jpg"
       src="/images/stadium-info.jpg">
      </v-img>
    </v-col>

    <v-col class="py-0">
      <div>
        <h3 class="title mb-sm-4">{{ stadium.name }} Stadium Information</h3>
        <div v-html="stadium.description" 
         class="paragraph-wrapper"></div>
      </div>
    </v-col>
  </v-row>

</template>

<style lang="scss" scoped>

  .paragraph-wrapper {
    font-size: clamp(.8rem, 2.5vw, 1rem);
    font-weight: 300;
    display: grid;
    gap: .5rem;
  }

  .stadium-img {
    position: relative;
    overflow: visible;
    transform-style: preserve-3d;

    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      background: lighten($accent, 5); 
      transform: translate(.7rem, 1rem) translateZ(-1px);
    }
  }
</style>

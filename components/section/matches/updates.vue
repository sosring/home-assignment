<script setup>

  const props = defineProps({
    matches: Array 
  });
</script>

<template>

 <article>
  <v-sheet color="grey-lighten-4"
   class="pa-4 pt-sm-0 pa-sm-8 pa-md-12">

    <h3 class="title mb-4 mb-sm-6">
      Upcoming Old Trafford Matches
    </h3>

    <div class="card-list-wrapper">

     <Lazy-Section-matches-card 
      v-for="matche in matches"
      :matche="matche"
      :key="matche.id"/>
    </div>
  </v-sheet>

  <v-pagination :length="2"
   aria-label="matches pagination"
   density="compact" variant="plain" 
   class="mt-4">

   <template #prev>
   </template>

   <template #next>
    <v-btn 
     size="small"
     variant="plain"
     color="black"
     append-icon="mdi-arrow-right">
       View all
    </v-btn>
   </template>
  </v-pagination>

 </article>
</template>

<style lang="scss" scoped>

  .title {
    font-size: clamp(1.1rem, 5vw, 1.7rem);
    font-weight: 600;
  }

  .card-list-wrapper {
    display: grid;
    grid-gap: 1rem
  }
</style>

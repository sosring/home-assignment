<script setup>
  import { useFootballStore } from '~/stores/useFootballStore.js'
  const useFootball = useFootballStore()

  const filteredResults = ref(null)
  const matches = ref(null)

  onMounted(async () => {
    const res = await Promise.all([
      useFootball.getMatcheUpdates(),
      useFootball.getFilteredResults()
     ])

    // Nested data needs destructuring
    const { data } = res[0]
    matches.value = data
    filteredResults.value = res[1]
  })
</script>

<template>

 <section id="Upcoming Matches">
  <v-container fluid 
   class="pa-0 pr-sm-0 pb-sm-16">

    <v-row class="ma-0 pa-0">

     <!-- Filter option -->
      <v-col cols="12" sm="5" md="4"
       class="ml-lg-10 mb-4 mt-sm-6 mt-md-10">

        <Section-matches-filter 
         :result="filteredResults" />
        <Section-matches-ticketSell />
      </v-col>

      <!-- Upcoming matche updates -->
      <v-col class="pa-0">
        <Section-matches-updates 
         :matches="matches"/>
      </v-col>

    </v-row>
  </v-container>
 </section>
</template>

<style lang="scss" scoped>
</style>

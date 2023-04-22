<script setup>
  import { useFootballStore } from '~/stores/useFootballStore.js'
  const useFootball = useFootballStore()

  const nearStadiums = ref(null)
  const nearTeams = ref(null)

  onMounted(async () => {
    const res = await Promise.all([
      useFootball.getNearbyStadiums(),
      useFootball.getNearbyTeams()
     ])
    nearStadiums.value = res[0]
    nearTeams.value = res[1]
  })
</script>

<template>

 <section id="FAQs">

  <v-container fluid
   class="px-0 pa-sm-4 pa-lg-16">

    <v-row>
      <v-col cols="12" md="8">
        <Section-FAQs-questions />
      </v-col>

      <v-col class="chip-container mt-md-16">

      <!-- Near by Teams -->
        <Section-FAQs-article 
         title="Nearby Teams"
         icon="mdi-fire"
         icon_color="orange"
         :items="nearTeams" />

      <!-- Near by Stadiums -->
        <Section-FAQs-article 
         title="Nearby Stadiums"
         icon="mdi-soccer-field"
         icon_color="grey"
         :items="nearStadiums" />

      </v-col>
    </v-row>
  </v-container>
 </section>

</template>

<style lang="scss" scoped>

  .chip-container {
    display: grid;
    grid-gap: 1rem
  }
</style>

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
   class="px-4 px-md-16">

    <v-row>
      <v-col cols="12" md="4">
      </v-col>

      <v-col v-if="stadium">
        <h3>{{ stadium.name }}</h3>
        <div v-html="stadium.description"></div>
      </v-col>
    </v-row>
  </v-container>
 </section>
</template>

<style lang="scss" scoped>
</style>

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
   <v-row class="ma-0">
    <v-container  fluid
     class="pa-0 pt-sm-8 bg-grey-lighten-4">

      <v-col cols="12">
        <Section-stadium-features/>
      </v-col>

      <v-col cols="12">
        <Section-stadium-info 
         v-if="stadium"
         :stadium="stadium"/>
      </v-col>
    </v-container>

    <v-col cols="12">
      <Section-stadium-facts
       v-if="stadium"
       :stadium="stadium"/>
    </v-col>
   </v-row>
 </section>
</template>

<style lang="scss" scoped>
</style>

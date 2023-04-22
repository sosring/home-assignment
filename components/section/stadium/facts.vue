<script setup>

  const props = defineProps({
    stadium: Object
  });
</script>

<template>

  <v-container fluid 
   class="pa-md-8" tag="section">
    <h3 class="title mb-4">{{ stadium.name }} History & Facts</h3>

    <v-row class="conatiner ma-0"
     justify="space-between"
     v-for="i in 3" :key="i">

      <v-col cols="6" sm="3"
       class="d-flex justify-space-between">
        <p class="font-weight-bold">Established:</p>
        <p>1993</p>
      </v-col>

      <v-col cols="6" sm="3" v-for="i in 2" :key="i"
       class="d-flex justify-space-between">
        <p class="font-weight-bold">Fact:</p>
        <p>Fact Answer</p>
      </v-col>

    </v-row>
  </v-container>

  <v-divider></v-divider>

  <v-container fluid tag="section">
    <v-row>
      <v-col cols="12" md="6">

      </v-col>
      <v-col cols="12" md="6"></v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>

  .container {
    font-size: clamp(.7rem, 2.5vw, 1rem);
  }
</style>

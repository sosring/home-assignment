<script setup>
</script>

<template>

 <section id="Upcoming Matches">
  <v-container fluid 
   class="px-0 py-4 pr-sm-0 pt-sm-0 pb-sm-16">

    <v-row class="ma-0">
     <!-- Filter option -->
      <v-col cols="12" sm="4" 
       class="mt-sm-6 mt-md-14">

        <Section-matches-filter />
      </v-col>

      <!-- Upcoming matche updates -->
      <v-col>
        <Section-matches-updates />
      </v-col>

    </v-row>
  </v-container>
 </section>
</template>

<style lang="scss" scoped>
</style>

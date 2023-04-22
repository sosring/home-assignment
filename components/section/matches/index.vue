<script setup>
</script>

<template>
<!-- 
     class="pa-0 pa-sm-4 px-md-16 bg-grey-lighten-4">
-->

 <section id="Upcoming Matches">
  <v-container fluid 
   class="px-0 pr-sm-0 pt-sm-0 pb-sm-16">

    <v-row>

     <!-- Filter option -->
      <v-col cols="12" md="4" 
       class="ml-lg-16 mb-4 mt-sm-6 mt-md-10">

        <Section-matches-filter />
      </v-col>

      <!-- Upcoming matche updates -->
      <v-col class="pa-0">
        <Section-matches-updates />
      </v-col>

    </v-row>
  </v-container>
 </section>
</template>

<style lang="scss" scoped>
</style>

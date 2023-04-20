<script setup>
</script>

<template>

 <section id="Upcoming Matches">
  <v-container fluid 
   class="px-4 pr-sm-0 pt-0">

    <v-row>
     <!-- Filter option -->
      <v-col cols="12" sm="4" 
       class="mt-4 mt-md-14">

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

<script setup>
</script>

<template>

  <v-container fluid tag="section" 
   id="Upcoming Matches" class="px-4
   pl-md-16">

     <v-row>

     <!-- Filter option -->
      <v-col cols="12" sm="4"
       class="mr-sm-4 mr-md-12">

        <Section-matches-filter />
      </v-col>

      <!-- Upcoming matche updates -->
      <v-col class="pa-sm-0">
        <Section-matches-updates />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
</style>

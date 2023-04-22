<template>

 <section id="Upcoming Matches">
  <v-container fluid 
   class="py-0 pr-sm-0 pb-sm-16">

    <v-row class="ma-0 pa-0">

     <!-- Filter option -->
      <v-col cols="12" sm="5" md="4"
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

<script setup>
  
  const props = defineProps({
   matche: Object 
  });
</script>

<template>

 <v-card 
  class="d-flex text-responsive 
  bg-grey-lighten-2">

 <v-row>
  <v-col cols="3" lg="2"
   class="hidden-sm-and-down pa-2">
    <div class="bg-black h-100">
    </div>
  </v-col>

  <v-col class="pa-4">
   <v-row class="d-flex flex-column 
   flex-lg-row py-2 align-lg-center">

    <!-- Team's Logo -->
    <v-col cols="6" lg="3"
     class="d-flex py-1 
      align-center">
      <v-img
       height="50"
       lazy-src
       :src="matche.team1_logo">
      </v-img>

      <p class="font-weight-bold px-2">VS</p>

      <v-img
       height="50"
       lazy-src
       :src="matche.team2_logo">
      </v-img>
    </v-col>
   
     <v-col class="d-flex align-end
      justify-space-between">

       <div>
        <p v-html="matche.tournament_name"></p>
        <h3 v-html="matche.fixture_name"></h3>
       </div>

       <div class="ticket">
        <v-btn
         color="accent"
         rounded="0"
         append-icon="mdi-arrow-right"
         class="px-5 font-weight-black">
         Buy
        </v-btn>
       </div>
     </v-col>
   </v-row>

   <v-divider></v-divider>

    <v-row class="d-flex py-2">
      <span class="mr-2">
        <v-icon color="grey-darken-1">mdi-soccer-field</v-icon>
        <p>kickoff: {{matche.start_time}}</p>
      </span> |

       <a :href="matche.map_url" 
        target="blank" class="ml-2">
        {{ matche.stadium_name }},{{ matche.stadium_city}}
       </a>
    </v-row>

   </v-col>
  </v-row> 

 </v-card>
</template>

<style lang="scss" scoped>

  .text-responsive {
    font-size: clamp(.8rem, 2.5vw, 1rem);
  }
</style>

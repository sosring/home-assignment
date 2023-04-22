<script setup>

  const props = defineProps({
    result: Object 
  });
</script>

<template>

  <v-card elevation="4" 
   v-if="result" max-width="412">

    <div class="d-flex py-2 px-4 
     justify-space-between align-center">

      <v-card-title class="px-0">
        <span>
          <v-icon>mdi-filter-variant</v-icon>
          Filter Results
        </span>
      </v-card-title>

      <v-chip color="grey-darken-4">
       Reset filters
      </v-chip>
    </div>

    <v-divider></v-divider>

   <!-- City -->
    <v-card-title>City</v-card-title>
    <v-radio-group>
     <div v-for="city in result.city" 
      :key="city" class="d-flex px-4
      align-center justify-space-between">

      <v-radio :label="city.city_name" :value="city.city_id">
      </v-radio>

      <p class="text-grey">( {{ city.total }} )</p>
     </div>
    </v-radio-group>

   <!-- Tournament -->
    <v-card-title>Tournament</v-card-title>
    <v-radio-group>
     <div v-for="tournament in result.tournament" 
      :key="tournament" class="d-flex px-4
      align-center justify-space-between">

      <v-radio :label="tournament.name" :value="tournament.id">
      </v-radio>

      <p class="text-grey">( {{ tournament.total }} )</p>
     </div>
    </v-radio-group>

   <!-- Team -->
    <v-card-title>Team</v-card-title>
    <v-radio-group>
     <div v-for="team in result.team" 
      :key="team" class="d-flex px-4 
      align-center justify-space-between">

       <v-radio :label="team.name" :value="team.id">
       </v-radio>
       <p class="text-grey">( {{ team.total }} )</p>
     </div>

    </v-radio-group>

  </v-card>

</template>

<style lang="scss" scoped>
</style>

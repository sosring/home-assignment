<script setup>
  const currentTab = ref('Places to visit') 
  const tabs = ['Places to visit', 'Restaurant', 'Shopping Centre', 'Transport', 'Popular']

  const props = defineProps({
    stadium: Object
  });
</script>

<template>

  <v-container fluid 
   class="px-0 pa-sm-4 pa-lg-16">
    <h3 class="title mb-4">{{ stadium.name }} History & Facts</h3>

    <v-row class="container ma-0 flex-wrap"
     justify="space-between"
     v-for="i in 3" :key="i">

      <v-col sm="3"
       class="d-flex justify-space-between ">
        <p class="font-weight-bold">Established:</p>
        <p>1993</p>
      </v-col>

      <v-col sm="3" v-for="i in 2" :key="i"
       class="d-flex justify-space-between">
        <p class="font-weight-bold">Fact:</p>
        <p>Fact Answer</p>
      </v-col>

    </v-row>
  </v-container>

  <v-divider></v-divider>

  <v-container fluid
   class="px-0 pa-sm-4 pa-lg-16"> 

    <v-row>
      <v-col cols="12" md="6">
       <v-card tag="article">
        <h3 class="title">{{ stadium.name }}</h3>
        <span class="mt-4">
          <v-icon color="grey">mdi-map-marker</v-icon>
          <p>
           {{ stadium.address_line_two }}
           {{ stadium.address_line_one }} 
           {{ stadium.country }} 
           {{ stadium.postcode }}
          </p>
        </span>

        <span>
          <v-icon color="grey">mdi-soccer-field</v-icon>
          <p>Stadium Capacity: <b>{{ stadium.capacity }}</b></p>
        </span>

        <span class="mt-4">
          <v-btn rounded="0"
           append-icon="mdi-arrow-right"
           class="font-weight-bold"
           variant="outlined">
            Getting there
          </v-btn>

          <v-btn rounded="0"
           :href="stadium.map_url"
           target="blank"
           append-icon="mdi-arrow-right"
           class="font-weight-bold"
           variant="outlined">
            View on map
          </v-btn>
        </span>

        <div v-html="stadium.description"
         class="paragraph-wrapper mt-6"></div>
       </v-card>
      </v-col>

      <v-col cols="12" md="6" class="pa-sm-8">
        <v-card tag="article"
         class="border rounded-lg
         pa-4 px-md-12 py-md-8">
          <span>
            <v-icon color="grey">mdi-map-marker-radius-outline</v-icon>
            <p class="title">What's nearby</p>
          </span>

         <v-tabs v-model="currentTab" class="mt-2"
          slider-color="accent">
            <v-tab v-for="tab in tabs"
             :key="tab" :value="tab">
              {{ tab }}
            </v-tab>
          </v-tabs>

        <div class="mt-4 container">
          <span class="justify-space-between mt-2"
           v-for="i in 7" :key="i">
            <p class="font-weight-bold">Place of interest</p>
            <p>0.8mile</p>
          </span>
        </div>

        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-divider></v-divider>
</template>

<style lang="scss" scoped>

  .container {
    font-size: clamp(.8rem, 2.5vw, 1rem);
  }
</style>

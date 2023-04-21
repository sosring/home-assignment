<script setup>
  
  const props = defineProps({
   matche: Object 
  });

  const dateFormatter = computed(() => {
      // formatting YYYY-MM-DD to MM-DD-YYYY
      const _date = props.matche.fixture_date.split('-');
      const dateObj = {month: _date[1], day: _date[2], year: _date[0]};

      const formattedDate = `${dateObj.month}  ${dateObj.day}  ${dateObj.year}`

      const month = ["Jan","Feb","Mar","Apr","May",
      "June","July", "Aug","Sept","Oct","Nov","Dec"];

      return {
        day: dateObj.day,
        month: month[new Date(formattedDate).getMonth()]
      }
  }) 
</script>

<template>

 <v-card class="d-flex text-responsive 
  bg-grey-lighten-2">

 <v-row>
  <v-col cols="3" lg="2"
   class="hidden-sm-and-down pa-sm-6">

    <div class="bg-white calendar-top">
      {{ dateFormatter.day }}
    </div>
    <div class="bg-black calendar-bottom">
      {{ dateFormatter.month }}
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
       alt="Team 1 logo"
       :lazy-src="matche.team1_logo"
       :src="matche.team1_logo">
      </v-img>

      <p class="font-weight-bold px-2">VS</p>

      <v-img
       height="50"
       lazy-src
       alt="Team 2 logo"
       :lazy-src="matche.team2_logo"
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
         class="px-5 font-weight-black">
          <span> Buy </span>
          <v-icon size="small">mdi-arrow-right</v-icon>
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

  @mixin flexCenter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .calendar-top {
    @include flexCenter;
    position: relative;
    height: 70%;
    font-size: clamp(1rem, 2.5vw, 2.4rem);
    font-family: monospace;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: -10%;
      height: .9rem;
      width: .3rem;
      background: darken($secoundary, 10); 
      z-index: 1;
    }

    &:before {
      left: 30%;
    }

    &:after {
      right: 30%;
    }
  }

  .calendar-bottom {
    @include flexCenter;
    height: 30%;
    font-size: clamp(.8rem, 2.5vw, 1.2rem);
    text-transform: uppercase;
  }

.ticket {
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: calc(.7rem - 1px);
    height: .9rem;
    width: .5rem;
    background: lighten($secoundary, 5); 
    z-index: 1;
  }

  &:before {
    left: 0px;
    border-radius: 0 1em 1em 0;
  }

  &:after {
    right: 0px;
    border-radius: 1em 0 0 1em;
  }
}
</style>

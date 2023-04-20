<template>

  <!-- System bar -->
<v-system-bar class="px-4 px-sm-12
  text-black" height="35">

  <v-row class="d-flex 
   flex-column flex-sm-row"
   no-gutters>

    <v-col cols="12" sm="6" tag="span"
     class="justify-center justify-sm-start pa-0">
      <p>
       COVID-19 - 
       <a href="#">Click Here</a>
       for updates about your order
      </p>
    </v-col>
    
    <v-col cols="12" sm="6" tag="span"
     class="justify-center justify-sm-end pa-0">
      <v-icon>mdi-lock-outline</v-icon>
      <a href="#">Sign In</a> |
      <a href="tel:08712845277"
      class="text-decoration-none">
        UK Tel: 0871 284 5277
      </a>
    </v-col>
   </v-row>
  </v-system-bar>

</template>

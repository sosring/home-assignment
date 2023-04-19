<script setup>
  const drawer = ref(false)

  const items = [
    { title: 'Teams', icon: 'mdi-chevron-down', to: "/" },
    { title: 'Tournaments', icon: 'mdi-chevron-down', to: "/" },
    { title: 'Stadium', icon: 'mdi-chevron-down', to: "/" },
    { title: 'Most Popular', icon: null, to: "/" },
    { title: 'Sell Your Tickets', icon: null, to: "/", bold: true },
  ]

  const breadcrumbs = [ 'Order Gurantee', 'Valid & Authentic Tickets', 'Secure & Safe Transaction', 'Customer Care Team' ] 
</script>

<template>

  <!-- sidenav -->
    <v-navigation-drawer absolute="true"
     v-model="drawer" tag="aside">
    </v-navigation-drawer>

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

    <!-- NavBar -->
    <v-app-bar elevation="0"
     class="px-4 px-md-12 py-0">

     <v-row align="center"
      justify="space-between">

        <v-app-bar-nav-icon @click="drawer = !drawer"
         class="hidden-md-and-up">
        </v-app-bar-nav-icon>

      <base-logo 
       svg="logo"/>

      <!-- Routes -->
        <v-list class="hidden-md-and-down d-md-flex">
          <v-list-item v-for="item in items"
            :key="item"
            :title="item.title"
            :append-icon="item.icon"
            :class="{ 'list-item-bold': item.bold  }"
            link>
          </v-list-item>
        </v-list>

        <base-ads />
     </v-row>
   </v-app-bar>

   <v-system-bar height="40"
    class="d-flex justify-space-around
    align-center flex-wrap">

     <v-breadcrumbs 
      class="font-weight-bold
      text-black flex-wrap text-center"
      :items="breadcrumbs"
      divider="|"
      icon="mdi-check-circle-outline">
      </v-breadcrumbs>
   </v-system-bar>
</template>

<style lang="scss" scoped>
 @import '@/assets/scss/main';

  .v-list-item {
    background: transparent !important;
    font-weight: 200
  }

  .list-item-bold {
    font-weight: 900 !important
  }
</style>

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

 <!-- Sidebar -->
  <v-navigation-drawer temporary
   v-model="drawer" tag="aside">

   <v-row>
    <v-col cols="12"
     class="py-6 d-flex 
     justify-start">
      <base-logo 
       width="180"
       svg="logo"/>
     </v-col>

      <v-divider></v-divider>

       <v-col cols="12">

        <!-- Routes -->
          <v-list>
            <v-list-item v-for="item in items"
              :key="item"
              :title="item.title"
              :append-icon="item.icon"
              :class="{ 'list-item-bold': item.bold  }"
              link>
            </v-list-item>
          </v-list>
         </v-col>
     </v-row>
  </v-navigation-drawer>
  
  <!-- System bar -->
  <base-header-SystemBar />

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

  <!-- Breadcrumbs -->
   <v-system-bar height="40">
     <v-breadcrumbs 
      class="text-black mx-auto flex-wrap 
      justify-center justify-md-space-around"
      :items="breadcrumbs"
      divider="|">
       <template #title="{ item }">

         <v-icon color="accent">
          mdi-check-circle-outline
         </v-icon>

         <p class="text-caption font-weight-bold"> {{item}} </p>
       </template>
     </v-breadcrumbs>

   </v-system-bar>
</template>

<style lang="scss" scoped>
  .v-list-item {
    background: transparent !important;
    font-weight: 200
  }

  .list-item-bold {
    font-weight: 900 !important
  }

  .v-breadcrumbs {
    @include md { width: 70% }
  }
</style>

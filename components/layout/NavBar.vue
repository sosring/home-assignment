<script setup>
  const drawer = ref(false)

  const items = [
    { title: 'Teams', icon: 'mdi-chevron-down', to: "/" },
    { title: 'Tournaments', icon: 'mdi-chevron-down', to: "/" },
    { title: 'Stadium', icon: 'mdi-chevron-down', to: "/" },
    { title: 'Most Popular', icon: null, to: "/" },
    { title: 'Sell Your Tickets', icon: null, to: "/", bold: true },
  ]

  //const steps = [ 'Order Gurantee', 'Valid & Authentic Tickets', 'Secure & Safe Transaction', 'Customer Care Team' ] 
</script>

<template>

  <!-- sidenav -->
  <!--
    <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer>
  -->

    <!-- System bar -->
    <v-system-bar class="px-md-12 
    d-flex justify-space-between"
    height="35">

      <span class="text-black">
        <p>
         COVID-19 - 
         <a href="#">Click Here</a>
         for updates about your order
        </p>
      </span>

      <span class="text-black">
        <v-icon>mdi-lock-outline</v-icon>
        <a href="#">Sign In</a> |
        <a href="tel:08712845277"
        class="text-decoration-none">
          UK Tel: 0871 284 5277
        </a>
      </span>
    </v-system-bar>

    <!-- NavBar -->
    <v-app-bar elevation="0"
     class="px-4 px-md-12 py-0">

     <v-row align="center" class="flex-column">

      <v-col cols="12" class="d-flex py-0
       justify-space-between align-center">

        <v-app-bar-nav-icon @click="drawer = !drawer"
         class="hidden-md-and-up">
        </v-app-bar-nav-icon>

        <nuxt-link to="/" color="black">
          <v-img cover
           src="/svgs/logo.svg"
           alt="Football ticket logo"
           class="logo">
          </v-img>
        </nuxt-link>

        <v-list class="hidden-md-and-down d-md-flex">
          <v-list-item v-for="item in items"
            :key="item"
            :title="item.title"
            :append-icon="item.icon"
            link>
          </v-list-item>
        </v-list>

        <span height="38" 
         class="hidden-md-and-down">
          <v-img
           width="150"
           src="/svgs/ads.svg" 
           alt="Advertisement"
           cover/>

          <div class="pa-2 bg-primary">
            <v-img 
             width="22"
             src="/svgs/whatsapp.svg" 
             alt="what'sApp icon"
             cover>
            </v-img>
          </div>
        </span>
       </v-col>

     </v-row>
   </v-app-bar>

   <v-system-bar height="40"></v-system-bar>
</template>

<style lang="scss" scoped>
 @import '@/assets/scss/mixins';

  .v-list-item {
    background: white !important;
  }

  .logo {
    width: 104px;
    @include sm { width: 204px; }
  }
</style>

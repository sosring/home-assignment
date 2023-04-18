<script setup>
  const drawer = ref(false)

  const items = [
    { title: 'Teams', icon: 'mdi-chevron-down', to: "/" },
    { title: 'Tournaments', icon: 'mdi-chevron-down', to: "/" },
    { title: 'Stadium', icon: 'mdi-chevron-down', to: "/" },
    { title: 'Most Popular', icon: null, to: "/" },
    { title: 'Sell Your Tickets', icon: null, to: "/", bold: true },
  ]
</script>

<template>

  <!-- sidenav -->
  <!--
    <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer>
  -->

    <!-- NavBar -->
    <v-app-bar elevation="0"
     class="px-4 px-md-12 pt-1">

     <v-row align="center" class="flex-column">
      <v-col class="w-100  d-flex 
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

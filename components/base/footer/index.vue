<script setup>
  const footerItems = [
    {
      title: 'Football Tickets Live',
      links: [ 'About Us', 'Contact Us', 'FAQs', 'Disclaimer', 'News', 'Sell Your Tickets']
    },
    {
      title: 'Top Club Tickets',
      links: [ 'Manchester United tickets', 'Liverpool tickets', 'Manchester City tickets', 'Tottenham Hotspur tickets', 'Arsenal tickets', 'Chelsea tickets' ]
    },
    {
      title: 'Top Stadium Tickets',
      links: [ 'Wembley Stadium Tickets', 'Old Trafford Tickets', 'Emirates Stadium tickets', 'Stamford Bridge tickets', 'Etihad Stadium tickets', 'Olympic Stadium tickets' ]
    },
  ]
</script>

<template>
  <!-- -----------------------------------------------
        Start Footer
  ----------------------------------------------- -->
  <v-footer class="footer px-4 px-sm-8"
   color="footer">

    <v-container fluid>
      <v-row>
        <!-- -----------------------------------------------
        First Column
      ----------------------------------------------- -->
        <v-col cols="12" 
         class="d-flex align-md-center
         justify-space-between flex-column
         flex-md-row px-0">

          <base-logo 
           svg="logo-white"/>

          <base-footer-Form />
        </v-col>
       <v-divider></v-divider>

        <!-- -----------------------------------------------
        Second Column
      ----------------------------------------------- -->

      <div class="secound-column w-100 py-sm-4">

        <v-col v-for="item in footerItems"
         :key="item" class="px-0">

          <h4 class="title" v-html="item.title"></h4>

          <ul>
            <li 
            v-for="link in item.links"
             :key="link"
             v-html="link"></li>
          </ul>
        </v-col>

        <v-col class="px-0">
          <div>
            <h4 class="title">Buy Football Tickets</h4>
            <ul>
              <li>Premier League tickets</li>
              <li>FA Cup Tickets</li>
            </ul>
          </div>

          <div class="mt-4">
            <h4 class="title">We Accept</h4>

             <span class="d-flex w-50">
              <v-img
               v-for="card in ['mastercard', 'maestro', 'visa', 'american_express']" 
               :key="card"
               :src="`/svgs/${card}.svg`">
              </v-img>
             </span>
          </div>
        </v-col>
      </div>
     </v-row>

     <v-divider></v-divider>

  <!-- -----------------------------------------------
    END COLUMN
  ----------------------------------------------- -->
      <div class="copy-right mt-sm-5 px-0 mt-0 ml-n3">
        <div class="d-block d-sm-flex align-center">
            <v-breadcrumbs 
             color="primary"
             class="flex-wrap px-0"
             :items="['© Football Tickets Live 2021. All rights reserved',
             'Terms & Conditions', 'Terms & Conditions', 'Privacy', 'Cookie Policy']"
             active-color="primary"
             divider="|">
            </v-breadcrumbs>
          <div class="ml-auto">
            <p class="font-weight-thin" 
             color="primary">Website Design & Marketing by Creative Ideaz</p>
          </div>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<style lang="scss" scoped>

  .title {
    font-weight: 700;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
  }

  .v-col li {
    font-weight: 400;
    line-height: 1.8;
    font-size: clamp(.8rem, 2.5vw, .9rem);
  }

  .secound-column {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
  }

  .copy-right {
    font-size: clamp(.8rem, 2.5vw, .9rem);
    font-weight: 400;
  }
</style>

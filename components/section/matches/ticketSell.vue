<template>
  <v-card max-width="412"
   class="ticket-shape mt-8 mx-auto 
   d-flex flex-column align-center
   pa-6">

    <v-card-item>
      <span class="align-center">
       <v-icon icon="mdi-bookmark-plus-outline"
         color="grey-darken-3"></v-icon>
       <v-card-title class="font-weight-bold"> Do you have a ticket to sell? </v-card-title>
      </span>
    </v-card-item>

    <v-card-text class="w-75">
      <p> Want to list your tickets on our site? Click through to find out more </p> 
    </v-card-text>

    <v-card-actions>
      <v-btn
       rounded="0"
       append-icon="mdi-arrow-right"
       class="bg-accent px-5 
       font-weight-bold">
        Sell Your Tickets
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>

  .ticket-shape {
    position: relative;
    background: lighten($accent, 40);
    text-align: center;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      height: 3rem;
      width: 2rem;
      background: white; 
      border: solid $accent;
    }

    &:before {
      left: -3px;
      border-radius: 0 2rem 2rem 0;
    }

    &:after {
      right: -3px;
      border-radius: 2rem 0 0 2rem;
    }
  }
</style>

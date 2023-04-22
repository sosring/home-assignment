<template>
  <form @submit.prevent="">

    <label>Get Ticket Alerts, News and more:</label>
    
    <input type=""
     placeholder="Your Name">

    <input type=""
     placeholder="Email Address">

    <v-btn
     color="accent"
     variant="outlined"
     append-icon="mdi-arrow-right">
      Stay Update
    </v-btn>
  </form>
</template>

<style lang="scss" scoped>
  
  form {
    display: grid;
    grid-gap: 1rem;
    align-items: center;
    margin: 1rem 0;
    width: 100%;
    @include md { 
     width: 70% ;
      grid-template-columns: repeat(4, 1fr);
   }

    label {
      font-size: clamp(.8rem, 2.5vw, 1.2rem)
    }

    input {
     background: white;
     padding: .5rem .7rem;
     height: 100%;
    }

    .v-btn {
      border: 2px solid $accent;
      border-radius: 0;
      padding: .5rem .7rem;
      height: 100%;
    }
  }
</style>

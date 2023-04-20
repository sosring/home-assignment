<script setup>
 const valid = ref(false)

 // Name rules
 const name = ref('')
 const nameRules = [
    value => {
      if (value) return true

      return 'Name is requred.'
    },
    value => {
      if (value?.length <= 10) return true

      return 'Name must be less than 10 characters.'
    },
  ]

 // Email rules
 const email = ref('')
 const emailRules = [
    value => {
      if (value) return true

      return 'E-mail is requred.'
    },
    value => {
      if (/.+@.+\..+/.test(value)) return true

      return 'E-mail must be valid.'
    },
  ]
</script>

<template>

  <v-form class="w-75" v-model="valid">

    <v-container class="px-0">
      <v-row class="d-flex 
       justify-end align-center">

       <label class="font-weight-bold">
        Get Ticket Alerts, News and more:
       </label>

        <v-col cols="12" md="4" >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="Your Name"
            variant="solo"
            required>
           </v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email Address"
            variant="solo"
            required
          ></v-text-field>
        </v-col>

        <v-btn type="submit"
         color="accent"
         rounded="0"
         append-icon="mdi-arrow-right" 
         variant="outlined"
         class="py-1">
          Stay Updated
        </v-btn>

      </v-row>
    </v-container>
  </v-form>
</template>

<style lang="scss" scoped>
  
  .v-form {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
    width: 100%;
    @include sm { width: 50% }
  }

</style>

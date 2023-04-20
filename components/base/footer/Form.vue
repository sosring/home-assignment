<script setup>
</script>

<template>

  <v-form submit>
    <v-container class="px-0">

      <v-row class="d-flex 
       justify-end align-center">
        <v-col cols="12" md="4" >
          <v-text-field
            rules="nameRules"
            label="Your Name"
            required>
           </v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            rules="emailRules"
            label="Email Address"
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
    width: 100%;
    @include sm { width: 50% }
  }
</style>

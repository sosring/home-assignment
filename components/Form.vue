<script setup>
</script>

<template>
  <v-form v-model="valid"
   class="w-50">
    <v-container class="px-0">

      <v-row>
        <v-col cols="12" md="4" >
          <v-text-field
            :rules="nameRules"
            :counter="10"
            label="Your Name"
            required>
           </v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            :rules="emailRules"
            label="Email Address"
            required
          ></v-text-field>
        </v-col>

      <v-col cols="12" md="4">
        <v-btn type="submit"
         color="accent"
         rounded="0"
         append-icon="mdi-arrow-right" 
         variant="outlined">
          Stay Updated
        </v-btn>
       </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style lang="scss" scoped>

  .v-col {
    display: flex;
    align-items: center;
    padding: 0
  }
  
  .v-text-field {
    padding: 0;
    height: 40px;
  }
</style>

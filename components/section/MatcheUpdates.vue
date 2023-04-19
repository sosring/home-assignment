<script setup>
  import { useTicketStore } from '~/stores/useTicketStore.js'
  const useTicket = useTicketStore()
</script>

<template>
  <v-container fluid tag="section" 
   id="Upcoming Matches" class="px-4
   pl-md-16">
     <v-row>

      <v-col cols="12" sm="4"
       class="mr-sm-4 mr-md-12">
        <v-sheet rounded="lg" elevation="3">
          <v-list rounded="lg">
            <v-list-item
              v-for="n in 5"
              :key="n"
              link>
              <v-list-item-title>
                List Item {{ n }}
              </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item
              link
              color="grey-lighten-4">
              <v-list-item-title>
                Refresh
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col class="pa-0">
        <v-sheet
         color="grey-lighten-4"
         class="new-updates-chart"
         min-height="70vh">
          <!--  -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
</style>

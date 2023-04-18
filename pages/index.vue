<script setup>
  
  const tab = ref(0)
  const tabs = ['Upcoming Matches', 'Stadium Information', 'FAQs']
</script>

<template>
  <MainBanner />

  <v-container class="pa-0" fluid>
     <v-tabs v-model="tab" color="accent"
      align-tabs="center">
        <v-tab v-for="(tab, index) in tabs"
         :key="tab"
         :value="index">
          {{ tab }}
        </v-tab>
      </v-tabs>
  <v-divider></v-divider>

   <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list rounded="lg">
              <v-list-item
                v-for="n in 5"
                :key="n"
                link
              >
                <v-list-item-title>
                  List Item {{ n }}
                </v-list-item-title>
              </v-list-item>

              <v-divider class="my-2"></v-divider>

              <v-list-item
                link
                color="grey-lighten-4"
              >
                <v-list-item-title>
                  Refresh
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>

        <v-col cols="8">
          <v-sheet elevation="3"
            min-height="70vh">
            <!--  -->
          </v-sheet>
        </v-col>
      </v-row>
  </v-container>

  <StadiumInfo />
</template>

<style lang="scss" scoped>
</style>

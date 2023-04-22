<script setup>

  const props = defineProps({
    title: String,
    icon: String,
    icon_color: String,
    items: Array
  });
</script>

<template>

  <v-card class="border rounded-md
   w-100 pa-2 px-md-4">

   <div class="d-flex justify-space-between">
    <span class="align-center">
      <v-icon :color="icon_color">{{ icon }}</v-icon>
      <h3 class="title">{{ title }}</h3>
    </span>

    <v-btn
     class="text-grey-darken-2"
     append-icon="mdi-arrow-right">
      View all
    </v-btn>
   </div>

     <span class="my-4">

       <v-chip
        v-for="item in items"
        :key="item"
        color="blue-darken-4"
        size="small">
        {{ item.name }}
      </v-chip>

     </span>
  </v-card>
</template>

<style lang="scss" scoped>
</style>

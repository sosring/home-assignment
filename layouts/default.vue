<template>

  <v-app>
    <base-header />

    <v-main>
     <v-skeleton-loader></v-skeleton-loader>
      <slot />
    </v-main>

    <base-footer />
  </v-app>
</template>

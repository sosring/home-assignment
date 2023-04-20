<script setup>
  const props = defineProps({
    svg: String,
    width: Number
  })
</script>

<template>

  <nuxt-link to="/" color="black">
    <v-img cover
     :width="width"
     :src="`/svgs/${svg}.svg`"
     alt="Football ticket logo"
     class="logo">
    </v-img>
  </nuxt-link>
</template>

<style lang="scss" scoped>

  .logo {
    width: 104px;
    @include sm { width: 204px; }
  }
</style>

<script setup>
  import axios from 'axios'

  const url = 'https://c78f8cbc-ead9-4cfd-acea-6b4d4b2972b0.mock.pstmn.io/get-stadium'
  const data = ref('')

  const getData = async function () {
    const res = await axios(url)
    data.value = await res.data.data
  }
  getData()
</script>

<template>
  <v-container fluid>
    <v-img 
     height="400"
     src="data.image">
    </v-img>
    {{data}}
  </v-container>
</template>

<style lang="scss" scoped>
</style>

<script setup>
  const questions = [
    { title: 'Where Can I Buy Manchester United Tickets?', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus non nisl condimentum mattis. Maecenas imperdiet auctor urna vel volutpat. Proin vitae dui id nisi tincidunt fringilla eu sit amet orci. Quisque commodo eros ac volutpat cursus. Nulla viverra vestibulum ante, vel imperdiet nibh mollis eu.' },
    { title: 'How Can I Buy Manchester United Tickets?', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus non nisl condimentum mattis. Maecenas imperdiet auctor urna vel volutpat. Proin vitae dui id nisi tincidunt fringilla eu sit amet orci. Quisque commodo eros ac volutpat cursus. Nulla viverra vestibulum ante, vel imperdiet nibh mollis eu.' },
    { title: 'How Often Do Manchester United Tickets Go On General Sale?', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus non nisl condimentum mattis. Maecenas imperdiet auctor urna vel volutpat. Proin vitae dui id nisi tincidunt fringilla eu sit amet orci. Quisque commodo eros ac volutpat cursus. Nulla viverra vestibulum ante, vel imperdiet nibh mollis eu.' },
    { title: 'How Long Does It Take For  Manchester United Tickets To Arrive?', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus non nisl condimentum mattis. Maecenas imperdiet auctor urna vel volutpat. Proin vitae dui id nisi tincidunt fringilla eu sit amet orci. Quisque commodo eros ac volutpat cursus. Nulla viverra vestibulum ante, vel imperdiet nibh mollis eu.' }
  ]
</script>

<template>

  <v-container>
    <h3 class="title">Old Trafford ticket information</h3>

    <div class="questions-wrapper mt-4 mt-md-8">

      <v-expansion-panels 
       v-for="question in questions"
       :key="question">
        <v-expansion-panel elevation="0"
          readonly rounded="0"
          color="white"
          :title="question.title"
          :text="question.text"
          class="border">
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
  .questions-wrapper {
    display: grid;
    grid-gap: 1rem
  }
</style>

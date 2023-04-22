<script setup>
  
  const items = [
    { icon: 'star-bookmark-icon', title: 'Ticket Order Guarantee' },
    { icon: 'ticket-icon', title: 'Valid & Authentic Tickets' },
    { icon: 'delivery-truck-icon', title: 'Delivered in Time' },
    { icon: 'money-icon', title: 'Cheap & Competitive' },
    { icon: 'shield-icon', title: 'Secure & Safe Transaction' },
    { icon: 'customer-care-icon', title: 'Customer Care Team' }
  ]
</script>

<template>

  <v-col cols="12">
    <ul class="items-container">

      <li v-for="item in items"
       :key="item.title"
       class="d-flex justify-center align-end">

       <div class="item-wrapper px-4 px-md-10">

        <v-img
         width="50"
         :src="`/svgs/${item.icon}.svg`">
        </v-img>

        <p v-html="item.title" 
         class="font-weight-bold"></p>
        </div>
      </li>
    </ul>
  </v-col>
</template>

<style lang="scss" scoped>

  .items-container {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(100px, 1fr) );

     li {
      gap: .5rem;

       &:nth-child(6) {
        div {
          border: none;
        }
       }
     }

    .item-wrapper {
       display: flex;
       flex-direction: column;
       align-items: center;
       text-align: center;
       gap: 1rem;

       @include md {
         border-right: solid 3px darken($primary, 10);
       };

      p {
        font-size: clamp(.7rem, 2.5vw, 1rem);
      }
    }
  }
</style>

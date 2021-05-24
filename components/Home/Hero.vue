<template>
  <div>
    <v-img :src="require('../../assets/images/Bristol.png')" :min-height="600">
      <h1 class="text-center text-h3 text-md-h2 text-lg-h1 pa-10 mt-16">
        Supporting businesses in Bristol and the South West
      </h1>
    </v-img>
    <v-row align="center" no-gutters>
      <v-col
        v-for="item in items"
        :key="item.id"
        :class="item.color"
        class="d-flex align-center text-center service-container"
        cols="6"
        lg="3"
      >
        <h5 class="text-h5 text-md-h4 mx-auto">{{ item.text }}</h5>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          color: 'secondary',
          text: 'Choosing the right service for you',
        },
        {
          id: 2,
          color: 'primary',
          text: 'Client testimonials',
        },
        {
          id: 3,
          color: 'secondary',
          text: 'Free initial consultation',
        },
        {
          id: 4,
          color: 'primary',
          text: 'Contact form',
        },
      ],
    }
  },
}
</script>

<style lang="css">
.service-container {
  height: 200px;
}

@media (min-width: 1264px) {
  .service-container {
    height: 250px;
  }
}
</style>

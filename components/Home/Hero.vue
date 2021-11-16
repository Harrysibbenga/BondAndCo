<template>
  <div>
    <v-img :src="require('../../assets/images/Bristol.jpg')" height="900">
      <h1
        class="
          text-center text-h5 text-sm-h4 text-md-h2
          pa-16
          mt-16
          position-absolute
        "
        style="width: 100%"
      >
        Supporting businesses in Bristol and the South West
      </h1>
      <v-row class="align-end fill-height d-none d-md-flex" no-gutters>
        <v-col
          v-for="item in items"
          :key="item.id"
          :class="item.color"
          class="
            d-flex
            align-center
            text-center
            service-container
            gradient-serv
          "
          md="3"
        >
          <div class="text-decoration-none white--text text-center mx-auto">
            <h5 class="text-h5 text-md-h5">{{ item.text }}</h5>
          </div>
        </v-col>
      </v-row>
    </v-img>
    <v-row class="align-end fill-height d-md-none" no-gutters>
      <v-col
        v-for="item in items"
        :key="item.id"
        :class="item.color2"
        class="d-flex align-center text-center service-container gradient-serv"
        cols="6"
      >
        <a
          :href="item.href"
          class="text-decoration-none white--text text-center mx-auto"
        >
          <h5 class="text-h5 text-md-h5">{{ item.text }}</h5>
        </a>
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
          color2: 'secondary',
          text: 'Choosing the right service for you',
          href: '#services',
        },
        {
          id: 2,
          color: 'primary',
          color2: 'primary',
          text: 'Client testimonials',
        },
        {
          id: 3,
          color: 'secondary',
          color2: 'primary',
          text: 'Free initial consultation',
          href: '#consultation',
        },
        {
          id: 4,
          color: 'primary',
          color2: 'secondary',
          text: 'Contact form',
          href: '#contact',
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
    height: 150px;
  }
}
</style>

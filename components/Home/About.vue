<template>
  <div>
    <v-img :src="require('../../assets/images/Coffee.png')">
      <v-row class="fill-height d-none d-md-flex">
        <v-col
          class="
            primary--text
            text-md-h5
            white
            my-auto
            ml-md-16
            description-text
          "
          cols="12"
        >
          <p>
            Bond &amp; Co is a small Bristol-based firm of Chartered Certified
            Accountants with a commitment to add value to our clients and offer
            a personal service. We challenge ourselves so that we bring our
            absolute best to our clients as, for us, it not only matters what we
            do but also how we do it, showing care and commitment to our work
            and output.
          </p>
          <p>
            We pride ourselves in bringing a wealth of experience and a
            professional approach to our comprehensive range of accounting,
            taxation, and business advisory services.
          </p>
        </v-col>
      </v-row>
    </v-img>
    <v-container class="d-md-none">
      <v-row>
        <v-col
          class="
            primary--text
            text-md-h5
            white
            my-auto
            ml-md-16
            description-text
            text-justify
          "
          cols="12"
        >
          <p>
            Bond &amp; Co is a small Bristol-based firm of Chartered Certified
            Accountants with a commitment to add value to our clients and offer
            a personal service. We challenge ourselves so that we bring our
            absolute best to our clients as, for us, it not only matters what we
            do but also how we do it, showing care and commitment to our work
            and output.
          </p>
          <p>
            We pride ourselves in bringing a wealth of experience and a
            professional approach to our comprehensive range of accounting,
            taxation, and business advisory services.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.description-text {
  opacity: 0.7;
}

@media (min-width: 960px) {
  .description-text {
    max-width: 600px;
  }
}
</style>

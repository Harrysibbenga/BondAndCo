<template>
  <div>
    <v-footer color="black" dark class="pb-5 pt-0 px-0">
      <v-container fluid class="primary py-16 gradient">
        <v-row>
          <v-col cols="12">
            <foot-contact></foot-contact>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row align="center" jusify="around" class="px-8">
          <v-col cols="12" md="6" lg="4" class="text-center text-lg-left">
            <p>
              Bond &amp; Co Accountants Ltd<br />
              t/a Bond &amp; Co Chartered Certified Accountants
            </p>
            <p>Company number: 12651083</p>
          </v-col>
          <v-col cols="12" md="6" lg="4" class="text-center">
            <a class="text-h3" href="tel:01174037799">0117 403 7799</a>
            <br />
            <br />
            <a
              href="mailto:polly@bondaccountants.co.uk"
              class="text-decoration-none"
              >Email: polly@bondaccountants.co.uk</a
            >
            <div class="align-center justify-center d-flex flex-row">
              <nuxt-link
                to="/privacy_policy"
                class="mx-1 text-decoration-none white--text"
                >Privacy Policy</nuxt-link
              >
              <nuxt-link
                to="/disclaimer"
                class="mx-1 text-decoration-none white--text"
                >Legal Policy</nuxt-link
              >
            </div>
          </v-col>
          <v-col cols="12" lg="4" class="text-center text-lg-right">
            <p>
              Address:<br />
              66 Gloucester Road<br />
              Bishopston<br />
              Bristol<br />
              England<br />
              BS7 8BH<br />
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

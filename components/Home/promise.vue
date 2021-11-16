<template>
  <div>
    <v-row>
      <v-col cols="12" class="py-0">
        <v-card color="primary" tile class="pa-2 py-lg-16 gradient">
          <div
            class="
              d-flex
              flex-no-wrap
              justify-space-between
              align-center
              mx-auto
            "
            style="max-width: 1400px"
          >
            <v-container>
              <v-card-title class="text-h5">Our promises</v-card-title>

              <v-card-text class="text-h6"
                >We believe that every client is important and will focus on
                your interests and helping you to achieve your business goals.
                Your time is important to the success of your business and our
                aim is to help you to focus that time to what matters, whilst
                taking the financial administrative burden from you. We have a
                proven track record of helping companies of all shapes and
                sizes, so please make a call to Bond &amp; Co before deciding on
                your accountant.</v-card-text
              >
            </v-container>

            <v-avatar class="ma-3 d-none d-md-block" size="125" tile>
              <v-img :src="require('../../assets/svg/handshake.svg')"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<template>
  <div class="white py-16">
    <v-container class="white">
      <v-row align="center">
        <v-col
          class="primary--text text-center text-md-left px-5"
          cols="12"
          md="6"
        >
          <p>
            Our accounting experts hold qualification and certifications from
            the ACCA and recommend Xero accounting software.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-row
            align="center"
            class="flex-center text-center justify-center"
            justify="space-around"
          >
            <v-img
              :src="require('../../assets/images/1200px-ACCA_logo.svg.png')"
              :max-width="200"
              :max-height="200"
            ></v-img>

            <v-img
              :src="require('../../assets/svg/xero.svg')"
              :max-width="200"
              :max-height="200"
            ></v-img>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

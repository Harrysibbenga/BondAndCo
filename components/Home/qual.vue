<template>
  <div class="white">
    <v-img :src="require('../../assets/svg/background.svg')" max-height="700">
      <v-row align="start" class="flex-column pa-10 mt-lg-16 ml-lg-5">
        <v-col
          class="primary--text text-center text-md-left px-5"
          cols="12"
          md="8"
          lg="6"
        >
          <p>
            Our accounting experts hold qualification and certifications from
            the ACCA and recommend Xero accounting software.
          </p>
          <p>For more information, click on the logos below.</p>
        </v-col>
        <v-col cols="12" md="8" lg="6">
          <v-row
            align="center"
            class="flex-center text-center justify-center"
            justify="space-around"
          >
            <a
              href="https://www.aat.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-img
                :src="require('../../assets/svg/aat.svg')"
                :max-width="200"
                :max-height="200"
              ></v-img>
            </a>
            <a
              href="https://www.accaglobal.com/uk/en.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-img
                :src="require('../../assets/images/1200px-ACCA_logo.svg.png')"
                :max-width="200"
                :max-height="200"
              ></v-img>
            </a>
          </v-row>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

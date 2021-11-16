<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card color="primary gradient-serv" tile class="pa-10">
          <div
            class="
              d-flex
              flex-no-wrap
              justify-space-between
              align-center
              mx-auto
              flex-column flex-sm-row
            "
            style="max-width: 1400px"
          >
            <div class="mb-10">
              <v-avatar class="ma-3" size="150" tile>
                <v-img :src="require('../../assets/svg/polly.svg')"></v-img>
              </v-avatar>
              <v-row
                align="center"
                justify="space-around"
                class="text-center mx-auto justify-center"
              >
                <v-btn
                  fab
                  small
                  color="white"
                  href="https://www.linkedin.com/in/polly-bond-690a7830/"
                  target="_blank"
                  ><v-icon class="primary--text">mdi-linkedin</v-icon></v-btn
                >
                <v-btn
                  fab
                  small
                  color="white"
                  href="https://www.facebook.com/BondandCoAccountants"
                  target="_blank"
                  ><v-icon class="primary--text">mdi-facebook</v-icon></v-btn
                >
              </v-row>
            </div>
            <div>
              <v-card-title class="text-h5">Meet the team</v-card-title>
              <v-card-subtitle class="text-h5"
                >Polly Bond, FCCA (Director)</v-card-subtitle
              >
              <v-card-text>
                <p>
                  Polly is the Managing Director of the firm and has many years’
                  experience in the accountancy profession. Qualifying as a
                  Chartered Certified Accountant in 2012, she worked as a
                  partner designate in a regional practice.
                </p>
                <p>
                  After spending time with a top-five accountancy firm, Polly
                  set up Bond &amp; Co, specialising in providing a range of
                  services to owner-managed businesses. Her portfolio includes a
                  number of successful companies, whom she advises on a wide
                  range of accounting and commercial issues.
                </p>
                <p>
                  Whilst not in the office, Polly enjoys golf, cooking, music,
                  and travelling.
                </p>
              </v-card-text>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

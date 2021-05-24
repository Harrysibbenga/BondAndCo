<template>
  <div>
    <v-container
      v-for="(item, index) in services"
      :key="index"
      fluid
      class="pa-0"
    >
      <v-row v-if="index % 2 == 0" align="center">
        <v-col class="pa-0">
          <v-card tile :min-height="335" color="secondary d-flex flex-center">
            <v-row
              class="
                fill-height
                d-flex
                flex-center flex-column flex-md-row
                justify-center
                align-center
                my-auto
              "
            >
              <div>
                <v-avatar class="ma-3" size="100" tile>
                  <v-img
                    :src="require('../../assets/svg/' + item[0].img)"
                  ></v-img>
                </v-avatar>
              </div>
              <div>
                <v-card-title class="text-h5">{{ item[0].title }}</v-card-title>
              </div>
            </v-row>
          </v-card>
        </v-col>
        <v-col class="pa-0">
          <v-card tile :min-height="335" color="primary d-flex flex-center">
            <v-row
              class="
                fill-height
                d-flex
                flex-center flex-column flex-md-row
                justify-center
                align-center
                my-auto
              "
            >
              <div class="order-1 order-md-0">
                <v-card-title class="text-h5">{{ item[1].title }}</v-card-title>
              </div>
              <div class="order-0 order-md-1">
                <v-avatar class="ma-3" size="100" tile>
                  <v-img
                    :src="require('../../assets/svg/' + item[1].img)"
                  ></v-img>
                </v-avatar>
              </div>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col class="pa-0">
          <v-card tile :min-height="335" color="primary d-flex flex-center">
            <v-row
              class="
                fill-height
                d-flex
                flex-center flex-column flex-md-row
                justify-center
                align-center
                my-auto
              "
            >
              <div>
                <v-avatar class="ma-3" size="100" tile>
                  <v-img
                    :src="require('../../assets/svg/' + item[0].img)"
                  ></v-img>
                </v-avatar>
              </div>
              <div>
                <v-card-title class="text-h5">{{ item[0].title }}</v-card-title>
              </div>
            </v-row>
          </v-card>
        </v-col>
        <v-col class="pa-0">
          <v-card tile :min-height="335" color="secondary d-flex flex-center">
            <v-row
              class="
                fill-height
                d-flex
                flex-center flex-column flex-md-row
                justify-center
                align-center
                my-auto
              "
            >
              <div class="order-1 order-md-0">
                <v-card-title class="text-h5">{{ item[1].title }}</v-card-title>
              </div>
              <div class="order-0 order-md-1">
                <v-avatar class="ma-3" size="100" tile>
                  <v-img
                    :src="require('../../assets/svg/' + item[1].img)"
                  ></v-img>
                </v-avatar>
              </div>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-img :src="require('../../assets/images/Handshake 2.png')"></v-img>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        [
          {
            title: 'Accounts preparation',
            img: 'accounts.svg',
          },
          {
            title: 'Tax returns and self-assessment',
            img: 'tax_returns.svg',
          },
        ],
        [
          {
            title: 'Business advice',
            img: 'business.svg',
          },
          {
            title: 'Book keeping',
            img: 'book_keeping.svg',
          },
        ],
        [
          {
            title: 'Management accounts',
            img: 'management_account.svg',
          },
          {
            title: 'VAT',
            img: 'vat.svg',
          },
        ],
        [
          {
            title: 'Payroll',
            img: 'payroll.svg',
          },
          {
            title: 'Company secretarial',
            img: 'company_secretarial.svg',
          },
        ],
      ],
    }
  },
}
</script>

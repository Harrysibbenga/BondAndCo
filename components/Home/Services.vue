<template>
  <div>
    <v-container
      v-for="(item, index) in services"
      :key="index"
      fluid
      class="pa-0"
    >
      <v-row v-if="index % 2 == 0" id="services" align="center">
        <v-col class="pa-0">
          <v-card
            tile
            :min-height="335"
            color="secondary d-flex flex-center"
            :nuxt="true"
            :to="item[0].link"
          >
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
          <v-card
            tile
            :min-height="335"
            color="primary d-flex flex-center"
            :nuxt="true"
            :to="item[1].link"
          >
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
          <v-card
            tile
            :min-height="335"
            color="primary d-flex flex-center"
            :nuxt="true"
            :to="item[0].link"
          >
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
          <v-card
            tile
            :min-height="335"
            color="secondary d-flex flex-center"
            :nuxt="true"
            :to="item[1].link"
          >
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
            link: '/accounts_preperation',
          },
          {
            title: 'Tax returns and self-assessment',
            img: 'tax_returns.svg',
            link: '/tax_returns',
          },
        ],
        [
          {
            title: 'Business advice',
            img: 'business.svg',
            link: '/business_advice',
          },
          {
            title: 'Book keeping',
            img: 'book_keeping.svg',
            link: '/book_keeping',
          },
        ],
        [
          {
            title: 'Management accounts',
            img: 'management_account.svg',
            link: '/management_accounts',
          },
          {
            title: 'VAT',
            img: 'vat.svg',
            link: '/vat',
          },
        ],
        [
          {
            title: 'Payroll',
            img: 'payroll.svg',
            link: '/payroll',
          },
          {
            title: 'Company secretarial',
            img: 'company_secretarial.svg',
            link: '/company_secretarial',
          },
        ],
      ],
    }
  },
}
</script>

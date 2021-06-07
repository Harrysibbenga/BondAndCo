<template>
  <div>
    <v-app-bar
      :elevation="0"
      absolute
      color="transparent"
      dark
      height="80"
      min-width="240"
      class="app-bar-container"
    >
      <nuxt-link to="/" @click.native="close()">
        <Logo />
      </nuxt-link>

      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="rightDrawer = !rightDrawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-expand-transition>
      <v-container
        v-show="rightDrawer"
        fluid
        class="position-fixed fill-height nav-container pa-0 primary"
      >
        <v-row>
          <v-col class="my-auto" cols="12">
            <v-list class="primary">
              <v-list-item
                v-for="(item, index) in navList"
                :key="index"
                :nuxt="true"
                :to="item.link"
                class="py-1"
                @click.native="close()"
              >
                <v-list-item-title class="white--text text-h5 text-center">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                v-if="user"
                :nuxt="true"
                to="/admin"
                class="py-1"
                @click.native="close()"
              >
                <v-list-item-title class="white--text text-h5 text-center">
                  Admin
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightDrawer: false,
      navList: [
        {
          link: '/#about',
          title: 'About us',
        },
        {
          link: '/#services',
          title: 'Services',
        },
        {
          link: '/accounts_preperation',
          title: 'Accounts preperation',
        },
        {
          link: '/tax_returns',
          title: 'Tax returns and self-assessment',
        },
        {
          link: '/business_advice',
          title: 'Business advice',
        },
        {
          link: '/book_keeping',
          title: 'Book-keeping',
        },
        {
          link: '/management_accounts',
          title: 'Management accounts',
        },
        {
          link: '/vat',
          title: 'VAT',
        },
        {
          link: '/payroll',
          title: 'Payroll',
        },
        {
          link: '/company_secretarial',
          title: 'Company secretarial',
        },
        {
          link: '#contact',
          title: 'Contact',
        },
      ],
    }
  },
  computed: {
    user() {
      return this.$store.getters['users/user']
    },
  },
  methods: {
    close() {
      setTimeout(() => {
        this.rightDrawer = false
      }, 500)
    },
  },
}
</script>

<style scoped>
.position-fixed {
  position: fixed;
}
.nav-container {
  z-index: 1;
  width: 100%;
  height: 100vh;
}
.app-bar-container {
  z-index: 2;
}
</style>

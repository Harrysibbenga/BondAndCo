<template>
  <div>
    <v-app-bar
      :elevation="0"
      color="transparent"
      dark
      height="100"
      min-width="240"
      class="app-bar-container"
    >
      <nuxt-link to="/" @click.native="close()">
        <logo :width="width" :height="height" />
      </nuxt-link>

      <v-spacer />
      <v-app-bar-nav-icon
        class="ml-1 icon-size"
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon x-large> mdi-menu </v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-expand-transition>
      <v-container
        v-show="rightDrawer"
        fluid
        class="position-fixed fill-height nav-container pa-0 py-5 primary"
      >
        <v-row>
          <v-col class="my-auto" cols="12">
            <v-list class="primary">
              <v-list-item
                class="py-1"
                :nuxt="true"
                to="/about"
                @click.native="close()"
              >
                <v-list-item-title class="white--text text-h5 text-center">
                  About us
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                v-for="(item, index) in servList"
                :key="index"
                :nuxt="true"
                :to="{ name: 'services-slug', params: { slug: item.slug } }"
                class="py-1"
                @click.native="close()"
              >
                <v-list-item-title class="white--text text-h5 text-center">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="py-1" href="#contact" @click.native="close()">
                <v-list-item-title class="white--text text-h5 text-center">
                  Contact
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
    }
  },
  computed: {
    user() {
      return this.$store.getters['users/user']
    },
    servList() {
      return this.$store.getters['services/services']
    },
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 200
        case 'sm':
          return 200
        default:
          return 250
      }
    },
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 80
        case 'sm':
          return 80
        default:
          return 100
      }
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
  position: absolute;
}
.icon-size {
  width: 50px !important;
  height: 50px !important;
}
</style>

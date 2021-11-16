<template>
  <v-container id="services" fluid>
    <v-row v-for="(item, index) in services" :key="index">
      <v-container
        v-if="index % 2 == 0"
        fluid
        cols="12"
        class="overflow-hidden pa-0"
      >
        <v-row align="center" no-gutters class="overflow-hidden">
          <v-col class="pa-0">
            <nuxt-link
              :to="{ name: 'services-slug', params: { slug: item[0].slug } }"
            >
              <v-card
                tile
                :min-height="335"
                color="secondary gradient-serv d-flex flex-center"
              >
                <v-row
                  class="
                    fill-height
                    d-flex
                    flex-center flex-column flex-md-row
                    align-center
                    my-auto
                  "
                  no-gutters
                >
                  <v-col
                    cols="12"
                    md="5"
                    class="d-block d-md-flex justify-md-end text-center"
                  >
                    <v-avatar class="ma-3 rounded-circle" :size="size" tile>
                      <v-img
                        :src="item[0].headline.url"
                        :alt="item[0].headline.alt"
                      ></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col
                    cols="12"
                    md="7"
                    class="d-flex justify-md-start align-center"
                  >
                    <v-card-title
                      class="text-h6 text-md-h5 text-lg-h4 text-center mx-auto"
                      >{{ item[0].title }}</v-card-title
                    >
                  </v-col>
                </v-row>
              </v-card>
            </nuxt-link>
          </v-col>
          <v-col class="pa-0">
            <nuxt-link
              :to="{ name: 'services-slug', params: { slug: item[1].slug } }"
            >
              <v-card
                tile
                :min-height="335"
                color="primary gradient-serv d-flex flex-center"
              >
                <v-row
                  class="
                    fill-height
                    d-flex
                    flex-center flex-column flex-md-row
                    align-center
                    my-auto
                  "
                  no-gutters
                >
                  <v-col
                    cols="12"
                    md="7"
                    class="order-1 order-md-0 d-flex justify-md-end text-center"
                  >
                    <v-card-title
                      class="text-h6 text-md-h5 text-lg-h4 text-center mx-auto"
                      v-html="item[1].title"
                    ></v-card-title>
                  </v-col>
                  <v-col
                    cols="12"
                    md="5"
                    class="order-0 order-md-1 text-center"
                  >
                    <v-avatar class="ma-3 rounded-circle" :size="size" tile>
                      <v-img
                        :src="item[1].headline.url"
                        :alt="item[1].headline.alt"
                      ></v-img>
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-card>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else fluid class="overflow-hidden pa-0">
        <v-row align="center" no-gutters class="overflow-hidden">
          <v-col class="pa-0">
            <nuxt-link
              :to="{ name: 'services-slug', params: { slug: item[0].slug } }"
            >
              <v-card
                tile
                :min-height="335"
                color="primary gradient-serv d-flex flex-center"
              >
                <v-row
                  class="
                    fill-height
                    d-flex
                    flex-center flex-column flex-md-row
                    align-center
                    my-auto
                  "
                  no-gutters
                >
                  <v-col
                    cols="12"
                    md="5"
                    class="d-block d-md-flex justify-md-end text-center"
                  >
                    <v-avatar class="ma-3 rounded-circle" :size="size" tile>
                      <v-img
                        :src="item[0].headline.url"
                        :alt="item[0].headline.alt"
                      ></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col
                    cols="12"
                    md="7"
                    class="d-flex justify-md-start align-center"
                  >
                    <v-card-title
                      class="text-h6 text-md-h5 text-lg-h4 text-center mx-auto"
                      >{{ item[0].title }}</v-card-title
                    >
                  </v-col>
                </v-row>
              </v-card>
            </nuxt-link>
          </v-col>
          <v-col class="pa-0">
            <nuxt-link
              :to="{ name: 'services-slug', params: { slug: item[1].slug } }"
            >
              <v-card
                tile
                :min-height="335"
                color="secondary gradient-serv d-flex flex-center"
              >
                <v-row
                  class="
                    fill-height
                    d-flex
                    flex-center flex-column flex-md-row
                    align-center
                    my-auto
                  "
                  no-gutters
                >
                  <v-col
                    cols="12"
                    md="7"
                    class="order-1 order-md-0 d-flex justify-md-end text-center"
                  >
                    <v-card-title
                      class="text-h6 text-md-h5 text-lg-h4 text-center mx-auto"
                      >{{ item[1].title }}</v-card-title
                    >
                  </v-col>
                  <v-col
                    cols="12"
                    md="5"
                    class="order-0 order-md-1 text-center"
                  >
                    <v-avatar class="ma-3 rounded-circle" :size="size" tile>
                      <v-img
                        :src="item[1].headline.url"
                        :alt="item[1].headline.alt"
                      ></v-img>
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-card>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import _ from 'lodash'

export default {
  computed: {
    size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'md':
          return 150
        case 'lg':
          return 175
        case 'xl':
          return 175
        default:
          return 125
      }
    },
    services() {
      const all = _.cloneDeep(this.$store.getters['services/services'])
      const set = []
      while (all.length > 0) {
        set.push(all.splice(0, 2))
      }
      console.log(set)
      return set
    },
  },
}
</script>

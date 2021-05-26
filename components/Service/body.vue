<template>
  <v-container fluid class="white">
    <v-row>
      <v-col cols="10" class="secondary thickness"> </v-col>
      <v-col cols="2" class="white"> </v-col>
    </v-row>
    <v-container fluid class="py-16 px-lg-10 my-16">
      <v-row align="center">
        <v-col
          cols="12"
          md="6"
          class="black--text"
          :class="{ 'order-1': body.left }"
        >
          <v-row>
            <v-col cols="12">
              <h3 class="py-4 text-h4">We can:</h3>
              <ul>
                <li v-for="(item, index) in body.bullets" :key="index">
                  {{ item }}
                </li>
              </ul>
            </v-col>
            <v-col v-if="body.exten.active" cols="12">
              <p>{{ body.exten.title }}</p>
              <ul v-if="body.exten.bullets.length > 0">
                <li v-for="(item, index) in body.exten.bullets" :key="index">
                  {{ item }}
                </li>
              </ul>
            </v-col>
            <v-col v-if="body.exten2.active" cols="12">
              <p>{{ body.exten2.title }}</p>
              <ul v-if="body.exten2.bullets.length > 0">
                <li v-for="(item, index) in body.exten2.bullets" :key="index">
                  {{ item }}
                </li>
              </ul>
            </v-col>
            <v-col v-if="body.exten3.active" cols="12">
              <p>{{ body.exten3.title }}</p>
              <ul v-if="body.exten3.bullets.length > 0">
                <li v-for="(item, index) in body.exten3.bullets" :key="index">
                  {{ item }}
                </li>
              </ul>
            </v-col>
            <v-col cols="12">
              <h3 class="text-h4 py-4">Next steps</h3>
              <p>
                Please contact us if you have any further questions or would
                like a free initial consultation.
              </p>
            </v-col>
            <v-col cols="12" class="text-center">
              <phone></phone>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="6"
          :class="{ 'order-0': body.left }"
          class="d-none d-md-block"
        >
          <v-img :src="require('../../assets/images/' + body.url)"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col cols="2" class="white thickness"> </v-col>
      <v-col cols="10" class="secondary"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import phone from '../phone.vue'
export default {
  components: { phone },
  props: {
    body: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
s
<style>
.thickness {
  height: 50px;
}
</style>

<template>
  <v-container fluid class="white">
    <v-row>
      <v-col cols="10" class="secondary thickness gradient-serv"> </v-col>
      <v-col cols="2" class="white"> </v-col>
    </v-row>
    <v-container fluid class="py-16 px-lg-10 my-16">
      <v-row align="center">
        <v-col cols="12" md="6" class="black--text">
          <v-row>
            <v-col cols="12">
              <div v-html="body.content"></div>
            </v-col>
            <v-col cols="12" class="text-center">
              <phone></phone>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6" class="d-none d-md-block">
          <v-img :src="body.url" :alt="body.alt"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col cols="2" class="white thickness"> </v-col>
      <v-col cols="10" class="secondary gradient-serv"></v-col>
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
  height: 65px;
}
</style>

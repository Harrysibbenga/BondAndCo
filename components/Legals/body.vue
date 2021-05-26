<template>
  <v-container fluid class="white">
    <v-row>
      <v-col cols="10" class="secondary thickness"> </v-col>
      <v-col cols="2" class="white"> </v-col>
    </v-row>
    <v-container class="py-16 px-lg-10 my-16">
      <v-row>
        <v-col
          v-for="(item, index) in body.content"
          :key="index"
          cols="12"
          class="black--text"
        >
          <h4 class="text-h5">{{ item.title }}</h4>
          <p v-html="item.text"></p>
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
export default {
  props: {
    body: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style>
.thickness {
  height: 50px;
}
</style>

<template>
  <div>
    <v-img :src="head.url" :alt="head.alt" height="800">
      <v-row align="end" justify="end" class="row-height">
        <div class="black title-container pa-5 mr-md-5">
          <h1 class="text-h3 text-md-h2 white--text text-right mr-md-2">
            {{ head.title }}
          </h1>
          <v-row align="end" justify="end" class="py-5 pt-10 pr-3">
            <hr />
            <hr />
            <hr />
          </v-row>
        </div>
      </v-row>
    </v-img>
  </div>
</template>

<script>
export default {
  props: {
    head: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style>
.title-container {
  width: 300px;
}

.row-height {
  height: 700px;
}

hr {
  border: none;
  border-top: 10px solid #364799;
  height: 5px;
  margin: 0 5px 0 5px;
  width: 20%;
}

@media (min-width: 960px) {
  .title-container {
    width: 600px;
  }
}
</style>

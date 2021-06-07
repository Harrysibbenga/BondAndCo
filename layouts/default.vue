<template>
  <v-app dark>
    <head-nav></head-nav>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <foot></foot>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('images/setImages')
  },
}
</script>

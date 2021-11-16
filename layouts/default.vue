<template>
  <v-app>
    <head-nav></head-nav>
    <v-main>
      <nuxt />
    </v-main>
    <foot></foot>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('images/setImages')
    this.$store.dispatch('services/setServices')
  },
}
</script>

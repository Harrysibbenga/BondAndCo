<template>
  <v-app dark>
    <v-main>
      <nuxt />
    </v-main>
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
